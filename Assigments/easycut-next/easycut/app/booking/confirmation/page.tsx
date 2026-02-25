"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function BookingConfirmationPage() {
  const sp = useSearchParams();
  const router = useRouter();
  const id = sp.get("id");

  const [booking, setBooking] = useState<any>(null);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    // provjeri login
    fetch("/api/auth/me", { cache: "no-store" as any })
      .then((r) => r.json())
      .then((me) => {
        if (!me) {
          const target = id ? `/booking/confirmation?id=${id}` : "/booking";
          router.replace(`/auth/login?next=${encodeURIComponent(target)}`);
          return;
        }
        setAuthChecked(true);
      })
      .catch(() => setAuthChecked(true));
  }, [router, id]);

  useEffect(() => {
    if (!id) return;

    // uzmi sve i nađi po id-u (demo, jednostavno)
    fetch("/api/bookings", { cache: "no-store" as any })
      .then((r) => r.json())
      .then((all) => {
        const found = Array.isArray(all) ? all.find((b) => b.id === id) : null;
        setBooking(found ?? false);
      });
  }, [id]);

  if (!authChecked) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-3xl mx-auto px-6 py-10">
          <p className="text-gray-700">Učitavanje...</p>
        </div>
      </div>
    );
  }

  if (!id) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-3xl mx-auto px-6 py-10">
          <p className="text-gray-700">Nedostaje ID rezervacije.</p>
          <Link className="text-orange-600 font-semibold" href="/booking">
            ← Nazad na booking
          </Link>
        </div>
      </div>
    );
  }

  if (booking === null) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-3xl mx-auto px-6 py-10">
          <p className="text-gray-700">Učitavanje...</p>
        </div>
      </div>
    );
  }

  if (booking === false) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-3xl mx-auto px-6 py-10">
          <p className="text-gray-700">Rezervacija nije pronađena.</p>
          <Link className="text-orange-600 font-semibold" href="/booking">
            ← Nazad na booking
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="bg-white border rounded-3xl p-8 shadow-sm">
          <p className="text-orange-600 font-semibold">EasyCut</p>
          <h1 className="text-3xl font-extrabold mt-2">
            Rezervacija potvrđena ✅
          </h1>
          <p className="text-gray-600 mt-2">
            Uživajte u novoj frizuri!
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 text-sm">
            <Info label="Ime" value={booking.fullName} />
            <Info label="Telefon" value={booking.phone} />
            <Info label="Usluga" value={booking.service} />
            <Info label="Barber" value={booking.barber} />
            <Info label="Datum" value={booking.date} />
            <Info label="Vrijeme" value={booking.time} />
          </div>

          {booking.note ? (
            <div className="mt-6 bg-gray-50 border rounded-2xl p-4">
              <p className="text-sm font-semibold text-gray-700">Napomena</p>
              <p className="text-gray-700 mt-1 whitespace-pre-wrap">
                {booking.note}
              </p>
            </div>
          ) : null}

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="inline-flex justify-center border px-5 py-2.5 rounded-xl hover:bg-gray-50 transition font-semibold"
            >
              Na početnu
            </Link>
            <Link
              href="/booking"
              className="inline-flex justify-center bg-orange-500 text-white px-5 py-2.5 rounded-xl hover:bg-orange-600 transition font-semibold"
            >
              Nova rezervacija
            </Link>
            <button
              onClick={() => {
                router.push("/reviews");
                router.refresh();
              }}
              className="inline-flex justify-center border px-5 py-2.5 rounded-xl hover:bg-gray-50 transition font-semibold"
            >
              Pogledaj recenzije
            </button>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-4 text-center">
          ID rezervacije: <span className="font-mono">{id}</span>
        </p>
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="border rounded-2xl p-4">
      <p className="text-gray-500">{label}</p>
      <p className="font-semibold text-gray-900 mt-1">{value}</p>
    </div>
  );
}