import Link from "next/link";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

function getBaseUrl() {
  const h = headers();
  const host = h.get("host");
  const proto = h.get("x-forwarded-proto") ?? "http";
  return `${proto}://${host}`;
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("hr-HR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-1" aria-label={`Rating ${rating} of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? "text-yellow-500" : "text-gray-300"}>
          ★
        </span>
      ))}
    </span>
  );
}

async function getReviews() {
  const res = await fetch(`${getBaseUrl()}/api/reviews`, { cache: "no-store" });
  return res.json();
}

export default async function ReviewsPage() {
  const reviews = await getReviews();

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-orange-600 font-semibold">EasyCut</p>
            <h1 className="text-4xl font-extrabold tracking-tight">Recenzije</h1>
            <p className="text-gray-600 mt-2">
              Iskustva korisnika:
            </p>
          </div>

          <Link
            href="/reviews/leave"
            className="inline-flex items-center justify-center bg-orange-500 text-white px-5 py-3 rounded-xl shadow hover:bg-orange-600 transition"
          >
            + Ostavi recenziju
          </Link>
        </div>

        {reviews.length === 0 ? (
          <div className="bg-white border rounded-2xl p-8 text-center text-gray-600">
            Nema recenzija. Budi prvi i napiši svoje iskustvo! 🙂
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {reviews.map((r: any) => (
              <Link
                key={r.id}
                href={`/reviews/${r.id}`}
                className="group bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-xl font-bold group-hover:text-orange-600 transition">
                    {r.title}
                  </h2>
                  <div className="shrink-0">
                    <Stars rating={Number(r.rating ?? 0)} />
                  </div>
                </div>

                <div className="text-sm text-gray-500 mt-2 flex items-center gap-2">
                  <span className="font-medium text-gray-700">{r.author}</span>
                  <span>•</span>
                  <span>{formatDate(r.createdAt)}</span>
                </div>

                <p className="mt-4 text-gray-700 leading-relaxed line-clamp-3">
                  {r.content}
                </p>

                <div className="mt-6 text-sm font-semibold text-orange-600">
                  Vidi više →
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}