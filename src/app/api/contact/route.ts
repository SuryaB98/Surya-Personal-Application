import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  // Basic validation
  if (!name || !email || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  // Here you can integrate with an email service (e.g., SendGrid, SMTP)
  // For now, just simulate success
  // await sendEmail({ name, email, message });

  return NextResponse.json({ success: true });
}
