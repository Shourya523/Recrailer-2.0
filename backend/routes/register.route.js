import express from "express";
import bcrypt from "bcrypt";
import { emailID } from "../models/user.models.js";
import { sendMailFromUser } from '../utils/mailer.js';
import { signup,logIn } from "../controllers/authController.js";
import { ensureAuthenticated } from "../middlewares/auth.js";

export const registerRouter = express.Router();

registerRouter.post('/sign-up',signup );
registerRouter.post('/log-in', logIn)

registerRouter.post('/send-email',ensureAuthenticated, async (req, res) => {
  try {
    const { from, to, subject, message } = req.body;

    if (!from || !to || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    await sendMailFromUser(from, to, subject, message, `<p>${message}</p>`);

    res.json({ message: `Email sent from ${from} to ${to}` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
registerRouter.get('/',ensureAuthenticated,(req,res)=>{
  res.json({message:"Hello World"})
})
