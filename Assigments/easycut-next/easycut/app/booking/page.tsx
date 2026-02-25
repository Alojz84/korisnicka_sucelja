"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SERVICES = [
  { name: "Muško šišanje", duration: "30 min", price: "15 €" },
  { name: "Brada", duration: "20 min", price: "10 €" },
  { name: "Šišanje + brada", duration: "45 min", price: "22 €" },
];

const BARBERS = ["Ivan", "Marko", "Luka"];

const TIMES = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
];

function todayISO() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export default function BookingPage() {
  const router = useRouter();

  const [authChecked, setAuthChecked] = useState(false);
  useEffect(() => {
    fetch("/api/auth/me", { cache: "no-store" as any })
      .then((r) => r.json())
      .then((me) => {
        if (!me) {
          router.replace(`/auth/login?next=${encodeURIComponent("/booking")}`);
          return;
        }
        setAuthChecked(true);
      })
      .catch(() => setAuthChecked(true));
  }, [router]);


  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    service: SERVICES[0].name,
    barber: BARBERS[0],
    date: todayISO(),
    time: TIMES[0],
    note: "",
  });

  const selectedService = useMemo(
    () => SERVICES.find((s) => s.name === form.service),
    [form.service]
  );

  function normalizePhone(input: string) {
  // makni razmake, crtice, zagrade
  return input.replace(/[^\d+]/g, "");
}

function isValidPhone(input: string) {
  const p = normalizePhone(input);

  // dopušta:
  //  - +385991234567
  //  - 0991234567
  //  - 00385991234567
  // Pravilo: 8–15 znamenki (E.164 okvirno), opcionalno + ili 00 na početku
  if (!/^(\+|00)?\d{8,15}$/.test(p)) return false;

  // ako počinje s +, iza mora biti znamenka
  if (p.startsWith("+") && p.length < 9) return false;

  return true;
}

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const phoneClean = normalizePhone(form.phone);

if (!isValidPhone(form.phone)) {
  alert(
    "Broj telefona nije ispravan.\n\nPrimjeri ispravnog formata:\n+385991234567\n0991234567\n00385991234567"
  );
  return;
}

    const res = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      alert(err?.error ? String(err.error) : "Greška pri slanju rezervacije");
      return;
    }

    const created = await res.json();
    router.push(`/booking/confirmation?id=${created.id}`);
  }

  if (!authChecked) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-3xl mx-auto px-6 py-10">
          <p className="text-gray-700">Učitavanje...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <p className="text-orange-600 font-semibold">EasyCut</p>
            <h1 className="text-4xl font-extrabold tracking-tight">
              Rezerviraj termin
            </h1>
          </div>

          <Link
            href="/application-info"
            className="hidden sm:inline-flex border px-4 py-2 rounded-xl hover:bg-gray-50 transition font-semibold text-gray-800"
          >
            Informacije o aplikaciji →
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          {/* FORM */}
          <form
            onSubmit={submit}
            className="bg-white border rounded-3xl p-8 shadow-sm"
          >
            <h2 className="text-xl font-bold">Podaci rezervacije</h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Ime i prezime">
                <input
                  required
                  className="w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-200"
                  placeholder="npr. Ivan Horvat"
                  value={form.fullName}
                  onChange={(e) =>
                    setForm({ ...form, fullName: e.target.value })
                  }
                />
              </Field>

              <Field label="Telefon">
                <input
                  required
                  className="w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-200"
                  placeholder="npr. +385 99 123 4567"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </Field>

              <Field label="Usluga">
                <select
                  className="w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-200"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                >
                  {SERVICES.map((s) => (
                    <option key={s.name} value={s.name}>
                      {s.name} ({s.duration}, {s.price})
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Barber">
                <select
                  className="w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-200"
                  value={form.barber}
                  onChange={(e) => setForm({ ...form, barber: e.target.value })}
                >
                  {BARBERS.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Datum">
                <input
                  type="date"
                  required
                  min={todayISO()}
                  className="w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-200"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                />
              </Field>

              <Field label="Vrijeme">
                <select
                  className="w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-200"
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                >
                  {TIMES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="mt-4">
              <Field label="Napomena (opcionalno)">
                <textarea
                  className="w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-200"
                  rows={4}
                  placeholder="npr. samo kratko sa strane"
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                />
              </Field>
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-orange-500 text-white py-3 rounded-2xl shadow hover:bg-orange-600 transition font-semibold"
            >
              Potvrdi rezervaciju
            </button>

            <p className="text-xs text-gray-500 mt-3">
            </p>
          </form>

          {/* SUMMARY CARD */}
          <aside className="bg-white border rounded-3xl p-6 shadow-sm h-fit">
            <h3 className="text-lg font-bold">Sažetak</h3>

            <div className="mt-4 space-y-3 text-sm">
              <Row label="Usluga" value={form.service} />
              <Row label="Trajanje" value={selectedService?.duration ?? "-"} />
              <Row label="Cijena" value={selectedService?.price ?? "-"} />
              <Row label="Barber" value={form.barber} />
              <Row label="Datum" value={form.date} />
              <Row label="Vrijeme" value={form.time} />
            </div>

          
          </aside>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-gray-700">{label}</label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-gray-500">{label}</span>
      <span className="font-semibold text-gray-900 text-right">{value}</span>
    </div>
  );
}