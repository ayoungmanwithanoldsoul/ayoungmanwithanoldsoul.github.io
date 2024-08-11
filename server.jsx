
// require('dotenv').config();

// const express = require('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();

// // Use CORS middleware to allow cross-origin requests
// app.use(cors());

// // Use bodyParser middleware to parse JSON requests
// app.use(bodyParser.json());

// // Create a transporter object for sending emails
// const transporter = nodemailer.createTransport({
//   service: 'Outlook365',
//   auth: {
//   }
// });

// // Define the POST route for sending emails
// app.post('/', (req, res) => {
//   const { firstName, lastName, email, phone, message } = req.body;

//   const mailOptions = {
//     from: email,
//     to: 'paoloandrew.webapp@outlook.com',
//     subject: 'Contact Form Submission',
//     text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error);
//       res.status(500).json({ success: false, message: 'Failed to send message. Please try again later.' });
//     } else {
//       res.status(200).json({ success: true, message: 'Message sent successfully' });
//     }
//   });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });