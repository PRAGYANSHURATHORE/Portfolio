const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express()
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name, !email, !subject, !message) {
        return res.status(400).json({message:" All fields are required."});
    }

    try {
        const transporter = nodemailer.createTransport({
            // host: 'smtp.gmail.com',
            // port: 587,
            // secure: false, // or 'STARTTLS'
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
        });

        const mailOptions ={
            from: `"${name}" <${email}>`,    
            to: process.env.EMAIL_RECEIVER,
            subject: `${subject}`,
            text: `${name}\n ${email}\n ${message}`,
        };

        await transporter.sendMail(mailOptions);
        console.log("Email sent");
        res.status(200).json({message: "Email sent successfully."});
    } catch (error) {
        console.error("Error sending mail:", error);
        res.status(500).json({message: "Error sending mail."});
    }

    // res.status(200).json({message: "Your message was sent succesfully"});
}
)
app.listen(PORT, () => 
    {console.log(`Server is running on http://localhost:${PORT}`)
 });