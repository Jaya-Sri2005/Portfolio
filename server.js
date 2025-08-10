const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "vangarajayasri2005@gmail.com",
    pass: "anca iqcc hqis wcln"  
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log("Error setting up transporter:", error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + " " + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  const mail = {
    from: `"${name}" <${email}>`,
    to: "vangarajayasri2005@gmail.com",
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
      console.error("Error sending email:", error);
      return res.status(500).json({ code: 500, status: "Failed to send message" });
    } else {
      console.log("Email sent:", info.response);
      return res.status(200).json({ code: 200, status: "Message Sent" });
    }
  });
});
