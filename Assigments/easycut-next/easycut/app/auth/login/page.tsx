"use client";

import { Suspense, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function isValidEmail(email: string) {
  // jednostavna i pouzdana provjera: nesto@nesto.domena
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const nextUrl = useMemo(() => {
    const n = searchParams.get("next");
    return n && n.startsWith("/") ? n : "/booking";
  }, [searchParams]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [touched, setTouched] = useState<{ email: boolean; password: boolean }>({
    email: false,
    password: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const emailError =
    !email.trim()
      ? "Unesite email."
      : !isValidEmail(email)
      ? "Email mora biti u formatu npr. example@gmail.com."
      : null;

  const passwordError = !password ? "Unesite lozinku." : null;

  const canSubmit = !emailError && !passwordError && !submitting;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError(null);
    setTouched({ email: true, password: true });

    if (!canSubmit) return;

    try {
      setSubmitting(true);

      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), password }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setFormError(data?.error || "Neuspješna prijava. Provjerite podatke.");
        return;
      }

      router.push(nextUrl);
      router.refresh();
    } catch {
      setFormError("Došlo je do greške. Pokušajte ponovno.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-orange-50 to-white">
      <div className="mx-auto flex max-w-xl flex-col px-4 py-10">
        <div className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Prijava
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Prijavite se kako biste mogli rezervirati termin.
          </p>

          {formError ? (
            <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {formError}
            </div>
          ) : null}

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-900">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                placeholder="example@gmail.com"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
              />
              {touched.email && emailError ? (
                <p className="mt-1 text-sm text-red-600">{emailError}</p>
              ) : null}
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-900">
                Lozinka
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, password: true }))}
                placeholder="Unesite lozinku"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
              />
              {touched.password && passwordError ? (
                <p className="mt-1 text-sm text-red-600">{passwordError}</p>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={!canSubmit}
              className="w-full rounded-xl bg-orange-500 px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Prijava..." : "Prijavi se"}
            </button>

            <p className="text-center text-sm text-gray-600">
              Nemaš račun?{" "}
              <a
                href={`/auth/signup?next=${encodeURIComponent(nextUrl)}`}
                className="font-semibold text-orange-600 hover:underline"
              >
                Registriraj se
              </a>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<main className="min-h-[calc(100vh-64px)]" />}>
      <LoginContent />
    </Suspense>
  );
}