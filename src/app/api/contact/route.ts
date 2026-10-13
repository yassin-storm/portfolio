import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Basic spam bot prevention: honeypot or payload size
    if (name.length > 100 || message.length > 5000) {
      return NextResponse.json(
        { error: 'Payload exceeds allowed limits' },
        { status: 400 }
      );
    }

    // If RESEND_API_KEY is configured in production, send real email
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || 'yasseenkarem747@gmail.com';

    if (resendApiKey) {
      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: [recipientEmail],
            reply_to: email,
            subject: `Portfolio Message: ${subject || 'New Contact Request'}`,
            text: `From: ${name} (${email})\n\nSubject: ${subject}\n\nMessage:\n${message}`,
          }),
        });

        if (!response.ok) {
          console.error('Email provider error:', await response.text());
        }
      } catch (err) {
        console.error('Failed to dispatch external email:', err);
      }
    }

    // Return confirmed receipt
    return NextResponse.json(
      {
        success: true,
        message: 'Message received and processed successfully.',
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
