import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { firstName, secondName, email, number, text } = req.body;
    console.log(firstName, secondName, email, number, text);
  
    // nodemailer configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Contact Form Submission',
      text: `Name: ${firstName} ${secondName}\nEmail: ${email}\nPhone: ${number}\nMessage: ${text}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (err) {
      console.error("something wrong in sendmail",err);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
