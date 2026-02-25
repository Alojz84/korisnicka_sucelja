import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { bookings, Booking } from "@/lib/bookingsStore";
import { store } from "@/lib/store";

function requireUser() {
  const session = cookies().get("easycut_session")?.value;
  if (!session) return null;
  return store.users.find((u) => u.id === session) ?? null;
}

export async function GET() {
  const user = requireUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json(bookings);
}

export async function POST(req: Request) {
  const user = requireUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();

  // minimalna validacija
  const required = ["fullName", "phone", "service", "barber", "date", "time"];
  for (const key of required) {
    if (!body?.[key]) {
      return NextResponse.json({ error: `Missing ${key}` }, { status: 400 });
    }
  }

  const newBooking: Booking = {
    id: crypto.randomUUID(),
    fullName: String(body.fullName),
    phone: String(body.phone),
    service: String(body.service),
    barber: String(body.barber),
    date: String(body.date),
    time: String(body.time),
    note: body.note ? String(body.note) : "",
    createdAt: new Date().toISOString(),
  };

  bookings.unshift(newBooking);
  return NextResponse.json(newBooking);
}