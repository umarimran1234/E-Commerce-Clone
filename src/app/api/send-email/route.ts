import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { to, subject, text } = body;

    if (!to || !subject || !text) {
      return NextResponse.json({ message: 'Missing required fields: to, subject, or text' }, { status: 400 });
    }

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // Use true for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject,
      text,
    });

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error: unknown) {
    console.error('Error sending email:', error);

    // Handle error safely by narrowing the type
    if (error instanceof Error) {
      return NextResponse.json({ message: 'Failed to send email', error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'An unexpected error occurred' }, { status: 500 });
  }
}