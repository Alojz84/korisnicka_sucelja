"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SignupPage() {
  const router = useRouter();
  const sp = useSearchParams();
  const next = sp.get("next") || "/booking";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
  }>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/auth/me", { cache: "no-store" as any })
      .then((r) => r.json())
      .then((me) => {
        if (me) router.replace(next);
      })
      .catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Client-side validacija
    const nextErrors: { name?: string; email?: string; password?: string } = {};
    const nameTrim = name.trim();
    const emailTrim = email.trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrim);

    if (!nameTrim) nextErrors.name = "Upišite ime i prezime.";
    else if (nameTrim.length < 2) nextErrors.name = "Ime je prekratko.";

    if (!emailTrim) nextErrors.email = "Upišite email.";
    else if (!emailOk)
      nextErrors.email = "Email mora biti u formatu npr. example@gmail.com";

    if (!password) nextErrors.password = "Upišite lozinku.";
    else if (password.length < 6)
      nextErrors.password = "Lozinka mora imati barem 6 znakova.";

    setFieldErrors(nextErrors);
    setMsg(null);
    if (Object.keys(nextErrors).length > 0) return;

    setLoading(true);

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: nameTrim, email: emailTrim, password }),
    });

    setLoading(false);

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setMsg(data?.error ?? "Registracija nije uspjela");
      return;
    }

    router.push(next);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-xl mx-auto px-6 py-10">
        <p className="text-orange-600 font-semibold">EasyCut</p>
        <h1 className="text-4xl font-extrabold tracking-tight mt-2">
          Registracija
        </h1>
        <p className="text-gray-600 mt-2">
          Kreiraj račun (demo) i odmah možeš rezervirati termin.
        </p>

        <form
          onSubmit={onSubmit}
          className="bg-white border rounded-3xl p-8 shadow-sm mt-8"
        >
          <div className="grid gap-4">
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Ime i prezime
              </label>
              <input
                className="mt-2 w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-200"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="npr. Ivan Horvat"
                autoComplete="name"
                required
              />
              {fieldErrors.name && (
                <p className="mt-2 text-sm text-red-600">{fieldErrors.name}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                className="mt-2 w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                autoComplete="email"
                type="email"
                required
              />
              {fieldErrors.email && (
                <p className="mt-2 text-sm text-red-600">{fieldErrors.email}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700">
                Lozinka
              </label>
              <input
                className="mt-2 w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-200"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="new-password"
                required
              />
              {fieldErrors.password && (
                <p className="mt-2 text-sm text-red-600">
                  {fieldErrors.password}
                </p>
              )}
            </div>

            {msg && (
              <div className="border rounded-2xl p-3 bg-orange-50 text-orange-800 text-sm">
                {msg}
              </div>
            )}

            <button
              className="w-full bg-orange-600 text-white font-semibold py-3 rounded-xl hover:bg-orange-700 transition disabled:opacity-60"
              type="submit"
              disabled={loading}
            >
              {loading ? "Kreiranje..." : "Kreiraj račun"}
            </button>

            <div className="flex items-center justify-between text-sm pt-2">
              <Link className="text-gray-700 hover:underline" href={`/auth/login?next=${encodeURIComponent(next)}`}>
                Imaš račun? <span className="font-semibold text-orange-600">Prijava</span>
              </Link>
            </div>
          </div>
        </form>

        <Link className="inline-flex mt-6 text-gray-700 hover:underline" href="/">
          ← Povratak na početnu
        </Link>
      </div>
    </div>
  );
}
