const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve frontend build
app.use(express.static(path.join(__dirname, "build")));

// Contact Email Transporter (Gmail)
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // from .env
    pass: process.env.EMAIL_PASS, // from .env (App Password)
  },
  logger: true, // log SMTP traffic
  debug: true
});

console.log("Email:", process.env.EMAIL_USER);
console.log("Pass:", process.env.EMAIL_PASS);

contactEmail.verify((error) => {
  if (error) {
    console.error("Error setting up transporter:", error);
  } else {
    console.log("✅ Ready to Send Emails");
  }
});

// Routes
app.post("/contact", (req, res) => {
  const name = `${req.body.firstName} ${req.body.lastName}`;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  const mail = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  contactEmail.sendMail(mail, (error, info) => {
    if (error) {
      console.error("❌ Error sending email:", error);
      return res.status(500).json({ code: 500, status: "Failed to send message" });
    } else {
      console.log("📧 Email sent:", info.response);
      return res.status(200).json({ code: 200, status: "Message Sent" });
    }
  });
});

// Handle React routing, return index.html for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Server listener
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
