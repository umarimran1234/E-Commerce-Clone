import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email } = req.body;

    // Validate the email and generate a token (pseudo-code)
    const token = "secure-random-token"; // Replace with actual logic
    const resetLink = `https://e-commerce-clone-tawny.vercel.app/reset-password?token=${token}`;

    // Store the token in the database (e.g., associated with the user)

    // Send email with the reset link
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    try {
      await transporter.sendMail({
        to: email,
        subject: "Password Reset Request",
        text: `Click the link below to reset your password:\n\n${resetLink}`,
      });
      res.status(200).json({ message: "Password reset email sent" });
    } catch (error) {
      console.error("Failed to send email:", error); // Log the error
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
