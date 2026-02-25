import { NextResponse } from "next/server";
import { contactMessages, ContactMessage } from "@/lib/contactStore";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function GET() {

  return NextResponse.json(contactMessages);
}

export async function POST(req: Request) {
  const body = await req.json();

  const fullName = String(body?.fullName ?? "").trim();
  const email = String(body?.email ?? "").trim();
  const message = String(body?.message ?? "").trim();

  if (!fullName || fullName.length < 2) {
    return NextResponse.json({ error: "Unesi ime i prezime." }, { status: 400 });
  }
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "Email nije ispravan." }, { status: 400 });
  }
  if (!message || message.length < 10) {
    return NextResponse.json(
      { error: "Poruka je prekratka (min 10 znakova)." },
      { status: 400 }
    );
  }

  const newMsg: ContactMessage = {
    id: crypto.randomUUID(),
    fullName,
    email,
    message,
    createdAt: new Date().toISOString(),
  };

  contactMessages.unshift(newMsg);
  return NextResponse.json({ success: true, id: newMsg.id });
}