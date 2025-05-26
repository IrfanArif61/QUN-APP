import type {NextApiRequest, NextApiResponse} from 'next';
import nodemailer from 'nodemailer';

// If using Gmail, you must use an App Password (not your regular password) and enable 2FA on your Google account.
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({error: 'Method not allowed'});
  }
  const {name, email, company, message} = req.body;
  if (!name || !email || !company || !message) {
    return res.status(400).json({error: 'Missing required fields'});
  }
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    await transporter.sendMail({
      from: `QUN USA Contact <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_TO,
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Company:</b> ${company}</p><p><b>Message:</b><br/>${message}</p>`,
    });
    res.status(200).json({success: true});
  } catch (error) {
    res.status(500).json({error: 'Failed to send email'});
  }
}
