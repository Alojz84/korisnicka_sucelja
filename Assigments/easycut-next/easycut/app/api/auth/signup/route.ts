import { NextResponse } from "next/server";
import { store } from "@/lib/store";

export async function POST(req: Request) {
  const { email, password, name } = await req.json();

  if (!email || !password || !name) {
    return NextResponse.json(
      { error: "Molimo ispunite sva polja." },
      { status: 400 }
    );
  }

  const emailTrim = String(email).trim();
  const nameTrim = String(name).trim();
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrim);
  if (!emailOk) {
    return NextResponse.json(
      { error: "Email mora biti u ispravnom formatu (npr. example@gmail.com)." },
      { status: 400 }
    );
  }
  if (nameTrim.length < 2) {
    return NextResponse.json(
      { error: "Ime i prezime je prekratko." },
      { status: 400 }
    );
  }
  if (String(password).length < 6) {
    return NextResponse.json(
      { error: "Lozinka mora imati barem 6 znakova." },
      { status: 400 }
    );
  }

  const exists = store.users.find((u) => u.email === emailTrim);
  if (exists) {
    return NextResponse.json(
      { error: "Korisnik s tim emailom već postoji." },
      { status: 400 }
    );
  }

  const user = {
    id: crypto.randomUUID(),
    email: emailTrim,
    password: String(password),
    name: nameTrim,
  };
  store.users.push(user);

  const res = NextResponse.json({ success: true });
  res.cookies.set("easycut_session", user.id, { httpOnly: true, path: "/" });
  return res;
}
