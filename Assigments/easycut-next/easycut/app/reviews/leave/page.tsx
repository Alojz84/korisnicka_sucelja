"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function StarPicker({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: 5 }).map((_, i) => {
        const starValue = i + 1;
        const active = starValue <= value;
        return (
          <button
            key={starValue}
            type="button"
            onClick={() => onChange(starValue)}
            className={`text-2xl transition ${
              active ? "text-yellow-500" : "text-gray-300"
            } hover:scale-110`}
            aria-label={`Set rating to ${starValue}`}
          >
            ★
          </button>
        );
      })}
      <span className="text-sm text-gray-600 ml-2">{value}/5</span>
    </div>
  );
}

export default function LeaveReviewPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    author: "",
    title: "",
    content: "",
    rating: 5,
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      alert("Greška pri slanju review-a");
      return;
    }

    await res.json();
    router.push("/reviews");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-xl mx-auto px-6 py-10">
        <Link href="/reviews" className="text-orange-600 font-semibold">
          ← Natrag na recenzije
        </Link>

        <div className="mt-6 bg-white border rounded-2xl shadow-sm p-8">
          <h1 className="text-3xl font-extrabold tracking-tight">
            Ostavi recenziju
          </h1>
          <p className="text-gray-600 mt-2">
            Napiši iskustvo — pojavit će se kao blog post na stranici Recenzije.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5 mt-8">
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Vaše ime
              </label>
              <input
                required
                type="text"
                className="mt-2 w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-200"
                value={form.author}
                onChange={(e) => setForm({ ...form, author: e.target.value })}
                placeholder="npr. Ivan"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700">
                Naslov
              </label>
              <input
                required
                type="text"
                className="mt-2 w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-200"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="npr. Odlična usluga!"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700">
                Ocjena
              </label>
              <div className="mt-2">
                <StarPicker
                  value={form.rating}
                  onChange={(v) => setForm({ ...form, rating: v })}
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700">
                Recenzija
              </label>
              <textarea
                required
                className="mt-2 w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-200"
                rows={6}
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                placeholder="Napiši svoje iskustvo..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-xl shadow hover:bg-orange-600 transition font-semibold"
            >
              Objavi recenziju
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}