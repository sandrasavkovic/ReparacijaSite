require('dotenv').config(); // za učitavanje varijabli iz .env
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Server is running");
});

// ruta za kontakt formu
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if(!name || !email || !message){
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,  
      pass: process.env.EMAIL_PASS   
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Reparacija - nova poruka od ${name}`,
    text: `${message}\n\nReply to: ${email}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Poruka je uspešno poslata!' });
  } catch (err) {
    console.error('Email sending failed:', err);
    res.status(500).json({ error: 'Slanje poruke nije uspelo.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
