import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://qickroom-q5xd.vercel.app',
    'https://qickroom.com',
    'https://api.qickroom.com'
  ],
  credentials: true
}));
app.use(express.json());
// Simple test route to verify backend is working
app.get('/api/ping', (req, res) => {
  console.log('Ping received from frontend');
  res.json({ message: 'pong' });
});
// Handle form submissions from frontend
app.post('/api/submit', async (req, res) => {
  console.log('Form submitted via /api/submit:', req.body);
  const { hotelName, city, hotelType, email, managerName, phone, jobTitle, managerOfficialEmail, numAdmins, role, services, serviceDescription, howDidYouKnow, additionalNotes } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.TO_EMAIL,
      subject: `New QickRoom Signup: ${hotelName}`,
      text:
        `Hotel Name: ${hotelName || ''}\n` +
        `City: ${city || ''}\n` +
        `Hotel Type: ${hotelType || ''}\n` +
        `Email: ${email || ''}\n` +
        `Manager Name: ${managerName || ''}\n` +
        `Phone: ${phone || ''}\n` +
        `Job Title: ${jobTitle || ''}\n` +
        `Official Email: ${managerOfficialEmail || ''}\n` +
        `Number of Admins: ${numAdmins || ''}\n` +
        `Role: ${role || ''}\n` +
        `Services: ${Array.isArray(services) ? services.join(', ') : (services || '')}\n` +
        `Service Description: ${serviceDescription || ''}\n` +
        `How Did You Know: ${howDidYouKnow || ''}\n` +
        `Additional Notes: ${additionalNotes || ''}`
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/api/contact', async (req, res) => {
  const { hotelName, city, hotelType, email, managerName, phone, jobTitle, managerOfficialEmail, numAdmins, role, services, serviceDescription, howDidYouKnow, additionalNotes } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.TO_EMAIL,
      subject: `New QickRoom Signup: ${hotelName}`,
      text:
        `Hotel Name: ${hotelName || ''}\n` +
        `City: ${city || ''}\n` +
        `Hotel Type: ${hotelType || ''}\n` +
        `Email: ${email || ''}\n` +
        `Manager Name: ${managerName || ''}\n` +
        `Phone: ${phone || ''}\n` +
        `Job Title: ${jobTitle || ''}\n` +
        `Official Email: ${managerOfficialEmail || ''}\n` +
        `Number of Admins: ${numAdmins || ''}\n` +
        `Role: ${role || ''}\n` +
        `Services: ${Array.isArray(services) ? services.join(', ') : (services || '')}\n` +
        `Service Description: ${serviceDescription || ''}\n` +
        `How Did You Know: ${howDidYouKnow || ''}\n` +
        `Additional Notes: ${additionalNotes || ''}`
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
