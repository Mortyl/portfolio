import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Length caps — keeps Resend payloads sane and prevents trivial DoS via
// megabyte messages. Generous enough that no legitimate enquiry will hit them.
const MAX_NAME_LENGTH    = 100;
const MAX_EMAIL_LENGTH   = 200;
const MAX_MESSAGE_LENGTH = 5000;

// Loose but effective: catches obviously-malformed addresses (missing @, no
// TLD, embedded whitespace) without rejecting the long tail of valid emails.
// Resend itself does proper validation downstream — we just bail early.
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, website } = body ?? {};

    // Honeypot — the contact form renders a `website` field that is hidden
    // from real users via CSS. Bots scrape the DOM and fill in every input
    // they see; if `website` arrives non-empty, treat as spam and pretend
    // to succeed so the bot doesn't realise it's been caught and retry.
    if (typeof website === "string" && website.trim().length > 0) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json(
        { error: "Invalid request." },
        { status: 400 }
      );
    }

    if (name.length > MAX_NAME_LENGTH) {
      return NextResponse.json(
        { error: `Name must be ${MAX_NAME_LENGTH} characters or fewer.` },
        { status: 400 }
      );
    }
    if (email.length > MAX_EMAIL_LENGTH) {
      return NextResponse.json(
        { error: `Email must be ${MAX_EMAIL_LENGTH} characters or fewer.` },
        { status: 400 }
      );
    }
    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.` },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Portfolio Contact <contact@marcusortyl.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
