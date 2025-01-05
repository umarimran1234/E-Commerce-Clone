import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check for POST method
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email } = req.body;

  // Validate the email input
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    // Simulate generating a password reset token
    const resetToken = Math.random().toString(36).substr(2);

    // Set up email transport
    const transporter = nodemailer.createTransport({
      service: "Gmail", // or your email provider
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Password Reset Request",
      html: `<p>Click <a href="https://e-commerce-clone-tawny.vercel.app/forgot-password?token=${resetToken}">here</a> to reset your password.</p>`,
    });

    return res.status(200).json({ message: "Password reset email sent." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error sending email." });
  }
}
