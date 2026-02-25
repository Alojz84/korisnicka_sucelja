"use client";

import { useState } from "react";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<
    { type: "success" | "error"; text: string } | null
  >(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);

    // ✅ POPUP validacija
    if (form.fullName.trim().length < 2) {
      alert("Unesi ime i prezime (min 2 znaka).");
      return;
    }
    if (!isValidEmail(form.email)) {
      alert("Email nije ispravan. Primjer: ime.prezime@gmail.com");
      return;
    }
    if (form.message.trim().length < 10) {
      alert("Poruka je prekratka (min 10 znakova).");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus({
          type: "error",
          text: data?.error ?? "Greška pri slanju poruke.",
        });
        return;
      }

      setStatus({ type: "success", text: "Poruka je uspješno poslana! ✅" });
      setForm({ fullName: "", email: "", message: "" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="mb-8">
          <p className="text-orange-600 font-semibold">EasyCut</p>
          <h1 className="text-4xl font-extrabold tracking-tight">Kontakt</h1>
          <p className="text-gray-600 mt-2">
            Imaš pitanje ili želiš nešto javiti? Pošalji poruku putem forme.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
          {/* INFO */}
          <div className="bg-white border rounded-3xl p-8 shadow-sm">
            <h2 className="text-xl font-bold">Kontakt informacije</h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <InfoCard title="Email" value="info@easycut.com" icon="✉️" />
              <InfoCard title="Telefon" value="+385 99 123 4567" icon="📞" />
              <InfoCard title="Adresa" value="Split" icon="📍" />
              <InfoCard title="Radno vrijeme" value="Ponedjeljak-petak, 09-17h" icon="🕒" />
            </div>

            <div className="mt-8 bg-orange-50 border border-orange-100 rounded-2xl p-5">
              <p className="font-semibold text-gray-900">Napomena</p>
              <p className="text-gray-700 mt-1">
                Poruka mora imati najmanje{" "}
                <b>10 znakova</b>.
              </p>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white border rounded-3xl p-8 shadow-sm h-fit">
            <h2 className="text-xl font-bold">Pošalji poruku</h2>
            <p className="text-gray-600 mt-1 text-sm">
              Odgovorit ćemo čim prije.
            </p>

            {status ? (
              <div
                className={`mt-5 rounded-2xl p-4 text-sm border ${
                  status.type === "success"
                    ? "bg-green-50 border-green-200 text-green-800"
                    : "bg-red-50 border-red-200 text-red-800"
                }`}
              >
                {status.text}
              </div>
            ) : null}

            <form onSubmit={submit} className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Ime i prezime
                </label>
                <input
                  required
                  className="mt-2 w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-200"
                  placeholder="npr. Ivan Horvat"
                  value={form.fullName}
                  onChange={(e) =>
                    setForm({ ...form, fullName: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Email
                </label>
                <input
                  required
                  type="email"
                  className="mt-2 w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-200"
                  placeholder="npr. ivan@gmail.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Poruka
                </label>
                <textarea
                  required
                  rows={6}
                  className="mt-2 w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-200"
                  placeholder="Napiši poruku..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
                
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-500 text-white py-3 rounded-2xl shadow hover:bg-orange-600 transition font-semibold disabled:opacity-60"
              >
                {loading ? "Slanje..." : "Pošalji"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: string;
}) {
  return (
    <div className="border rounded-2xl p-5 bg-gray-50">
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 rounded-xl bg-orange-100 flex items-center justify-center text-xl">
          {icon}
        </div>
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="font-semibold text-gray-900 mt-1">{value}</p>
        </div>
      </div>
    </div>
  );
}