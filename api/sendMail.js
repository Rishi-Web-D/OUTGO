// api/sendEmail.js

const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Validate input (add more validation as needed)
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Please fill out all fields.' });
        }

        // Configure nodemailer with your email service credentials
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // e.g., Gmail, Yahoo, etc.
            auth: {
                user: 'rishisharma6265@gmail.com',
                pass: '8224986172'
            }
        });

        // Email content
        const mailOptions = {
            from: email,
            to: 'rishisharma6265@gmail.com', // Your email address
            subject: 'New Contact Form Submission',
            html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong></p>
                   <p>${message}</p>`
        };

        try {
            // Send email
            const info = await transporter.sendMail(mailOptions);
            console.log('Email sent:', info.response);
            return res.status(200).json({ message: 'Email sent successfully.' });
        } catch (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ error: 'Internal server error. Please try again later.' });
        }
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}
