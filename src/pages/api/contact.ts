import type {NextApiRequest, NextApiResponse} from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({error: 'Method not allowed'});
  }
  
  const {name, email, company, phone, service, budget, message} = req.body;
  
  if (!name || !email || !company || !service || !message) {
    return res.status(400).json({error: 'Missing required fields'});
  }
  
  try {
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
        <h2 style="color: #fff; text-align: center; margin-bottom: 30px;">New IT Consultancy Inquiry</h2>
        
        <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
          <h3 style="color: #fff; margin-top: 0;">Client Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        </div>
        
        <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
          <h3 style="color: #fff; margin-top: 0;">Project Details</h3>
          <p><strong>Service Required:</strong> ${service}</p>
          ${budget ? `<p><strong>Budget Range:</strong> ${budget}</p>` : ''}
        </div>
        
        <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px;">
          <h3 style="color: #fff; margin-top: 0;">Project Description</h3>
          <p style="line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding: 20px; background: rgba(255,255,255,0.1); border-radius: 10px;">
          <p style="margin: 0; font-size: 14px; opacity: 0.8;">
            This inquiry was submitted through the QUN USA website contact form.
          </p>
        </div>
      </div>
    `;
    
    await transporter.sendMail({
      from: `QUN USA IT Consultancy <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_TO || process.env.EMAIL_USER,
      subject: `New ${service} Inquiry from ${company}`,
      text: `
        New IT Consultancy Inquiry
        
        Client Information:
        Name: ${name}
        Email: ${email}
        Company: ${company}
        ${phone ? `Phone: ${phone}` : ''}
        
        Project Details:
        Service: ${service}
        ${budget ? `Budget: ${budget}` : ''}
        
        Message:
        ${message}
      `,
      html: emailContent,
    });
    
    res.status(200).json({success: true});
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({error: 'Failed to send email'});
  }
}