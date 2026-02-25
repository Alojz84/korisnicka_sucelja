import { NextResponse } from "next/server";
import { store } from "@/lib/store";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { error: "Molimo ispunite sva polja." },
      { status: 400 }
    );
  }

  const emailTrim = String(email).trim();
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrim);
  if (!emailOk) {
    return NextResponse.json(
      { error: "Email mora biti u ispravnom formatu (npr. example@gmail.com)." },
      { status: 400 }
    );
  }

  const user = store.users.find(
    (u) => u.email === emailTrim && u.password === password
  );

  if (!user) {
    return NextResponse.json(
      { error: "Neispravan email ili lozinka." },
      { status: 401 }
    );
  }

  const res = NextResponse.json({ success: true });
  res.cookies.set("easycut_session", user.id, { httpOnly: true, path: "/" });
  return res;
}
