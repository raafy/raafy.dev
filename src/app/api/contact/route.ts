import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

async function sendEmail(
  to: string,
  subject: string,
  text: string,
  html?: string,
) {
  try {
    const info = await transporter.sendMail({
      from: `raafy.dev <${process.env.GMAIL_USER}>`,
      to,
      subject,
      text,
      html,
    });
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}

export async function POST(req: NextRequest) {
  try {
    const {
      name,
      email,
      message,
    }: { name: string; email: string; message: string } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { status: "error", message: "Missing required fields" },
        { status: 400 },
      );
    }

    await sendEmail(
      process.env.GMAIL_USER as string,
      "New Message from raafy.dev",
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    );

    return NextResponse.json({ status: "success" }, { status: 200 });
  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.json(
      { status: "error", message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
