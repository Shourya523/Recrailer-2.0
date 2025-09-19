import nodemailer from 'nodemailer';
import { User } from '../models/user.models.js';
import CryptoJS from 'crypto-js';

export async function sendMailFromUser(fromEmail, to, subject, text, html) {
  try {
    const user = await User.findOne({ email: fromEmail });
    if (!user) throw new Error('Sender email not found in database');

    if (!user.appPassword) throw new Error('No appPassword stored for sender');

    const decryptedAppPassword = CryptoJS.AES.decrypt(user.appPassword, process.env.APP_PASS_SECRET).toString(CryptoJS.enc.Utf8);

    if (!decryptedAppPassword) throw new Error('Failed to decrypt appPassword');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: user.email,
        pass: decryptedAppPassword,
      },
    });

    await transporter.sendMail({
      from: `"${user.email}" <${user.email}>`,
      to,
      subject,
      text,
      html,
    });

    console.log(`Email sent from ${user.email} to ${to}`);
  } catch (err) {
    console.error('Error sending email:', err);
    throw err;
  }
}
