import express from "express";
import bcrypt from "bcrypt";
import { User } from "../models/user.models.js";
import { email } from "../models/emails.models.js";
import { sendMailFromUser } from '../utils/mailer.js';
import { signup, logIn,mails } from "../controllers/authController.js";
import { ensureAuthenticated } from "../middlewares/auth.js";

export const registerRouter = express.Router();

registerRouter.post('/sign-up', signup);
registerRouter.post('/log-in', logIn)

registerRouter.post("/send-email", ensureAuthenticated, async (req, res) => {
  try {
    const { from, to, subject, message, scheduledTime } = req.body;

    if (!from || !to || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    let status = "scheduled";

    if (!scheduledTime) {
      await sendMailFromUser(from, to, subject, message, `<p>${message}</p>`);
      status = "sent";
    }

    const mail = await email.create({
      userId: req.user._id,
      to,
      subject,
      body: message,
      scheduledTime: scheduledTime || new Date(),
      status,
    });

    res.status(201).json({
      message: scheduledTime
        ? "Mail scheduled successfully"
        : "Mail sent successfully",
      mail,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

registerRouter.get("/scheduled", ensureAuthenticated, mails);

registerRouter.get("/", ensureAuthenticated, (req, res) => {
  res.json({ message: "Hello World" });
});

// 🚀 New endpoint for cron-job.org
registerRouter.get("/run-cron", async (req, res) => {
  try {
    const now = new Date();
    const mails = await email
      .find({ scheduledTime: { $lte: now }, status: "scheduled" })
      .populate("userId");

    console.log("Cron hit at:", now, "Mails found:", mails.length);

    let processed = 0;

    for (const mail of mails) {
      try {
        const user = mail.userId; // already populated
        if (!user) {
          mail.status = "failed";
          await mail.save();
          continue;
        }

        await sendMailFromUser(
          user.email,
          mail.to,
          mail.subject,
          mail.body,
          `<p>${mail.body}</p>`
        );

        mail.status = "sent";
        await mail.save();
        processed++;
        console.log(`Mail sent: ${user.email} → ${mail.to}`);
      } catch (err) {
        mail.status = "failed";
        await mail.save();
        console.error("Error sending mail:", err);
      }
    }

    res.json({ message: "Cron executed", mailsProcessed: processed });
  } catch (err) {
    console.error("Cron error:", err);
    res.status(500).json({ error: err.message });
  }
});
