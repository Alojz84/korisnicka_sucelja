"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Msg = {
  id: string;
  fullName: string;
  email: string;
  message: string;
  createdAt: string;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("hr-HR");
}

export default function ContactMessagesPage() {
  const [messages, setMessages] = useState<Msg[] | null>(null);

  useEffect(() => {
    fetch("/api/contact", { cache: "no-store" as any })
      .then((r) => r.json())
      .then(setMessages)
      .catch(() => setMessages([]));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <Link href="/contact" className="text-orange-600 font-semibold">
          ← Back to contact
        </Link>

        <h1 className="text-3xl font-extrabold mt-4">
          Poruke s kontakt forme
        </h1>
        

        {messages === null ? (
          <p className="mt-6">Loading...</p>
        ) : messages.length === 0 ? (
          <p className="mt-6 text-gray-600">Nema poruka.</p>
        ) : (
          <div className="mt-6 space-y-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className="bg-white border rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold">{m.fullName}</p>
                    <p className="text-sm text-gray-500">{m.email}</p>
                  </div>
                  <span className="text-sm text-gray-500">
                    {formatDate(m.createdAt)}
                  </span>
                </div>

                <p className="mt-4 text-gray-800 whitespace-pre-wrap">
                  {m.message}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}