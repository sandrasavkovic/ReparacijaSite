require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message)
    return res.status(400).json({ error: 'All fields are required.' });

  try {
    await resend.emails.send({
      from: 'Reparacija Contact Form <noreply@reparacija.com>',
      to: process.env.EMAIL_TO,
      subject: `Reparacija - nova poruka od ${name}`,
      text: `${message}\n\nReply to: ${email}`,
    });

    res.status(200).json({ message: 'Poruka je uspešno poslata!' });
  } catch (error) {
    console.error('Email sending failed:', error);
    res.status(500).json({ error: 'Slanje poruke nije uspelo.' });
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
