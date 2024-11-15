const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

const sendEmail = asyncHandler(async (email, html) => {
  try {
    if (!process.env.EMAIL_NAME || !process.env.EMAIL_APP_PASSWORD) {
      throw new Error("Email credentials are not set in environment variables.");
    }

    if (!email) {
      throw new Error("Email content must be provided.");
    }

    if (!html) {
      throw new Error("HTML content must be provided.");
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: process.env.EMAIL_NAME,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: '"E-commerce 👻" <noreply@Ecommerce.com>', // sender address
      to: email, // list of receivers
      subject: "Forgot password", // Subject line
      html: html, // HTML body
    });

    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
});

module.exports = {
  sendEmail,
};
