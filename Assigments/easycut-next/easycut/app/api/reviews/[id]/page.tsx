"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < rating ? "text-yellow-500" : "text-gray-300"}
        >
          ★
        </span>
      ))}
    </span>
  );
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

export default function ReviewPostPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [review, setReview] = useState<any>(null); // null=loading, false=not found, object=data

  useEffect(() => {
    fetch(`/api/reviews/${params.id}`, { cache: "no-store" as any })
      .then(async (res) => {
        if (!res.ok) return false;
        return res.json();
      })
      .then(setReview)
      .catch(() => setReview(false));
  }, [params.id]);

  async function handleDelete() {
    const ok = confirm("Jeste li sigurni da želite izbrisati recenziju?");
    if (!ok) return;

    const res = await fetch(`/api/reviews/${params.id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      router.push("/reviews");
      router.refresh();
    } else {
      alert("Error deleting review");
    }
  }

  if (review === null) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-3xl mx-auto px-6 py-10">
          <p className="text-gray-700">Loading...</p>
        </div>
      </div>
    );
  }

  if (review === false) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-3xl mx-auto px-6 py-10">
          <p className="text-gray-700">Recenzija nije pronađena.</p>
          <Link href="/reviews" className="text-orange-600 font-semibold">
            ← Nazad na recenzije
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <Link href="/reviews" className="text-orange-600 font-semibold">
          ← Nazad na recenzije
        </Link>

        <article className="mt-6 bg-white border rounded-2xl shadow-sm p-8">
          <div className="flex items-start justify-between gap-6">
            <h1 className="text-3xl font-extrabold tracking-tight">
              {review.title}
            </h1>
            <Stars rating={Number(review.rating ?? 0)} />
          </div>

          <div className="mt-3 text-sm text-gray-500 flex items-center gap-2">
            <span className="font-medium text-gray-800">{review.author}</span>
            <span>•</span>
            <span>{formatDate(review.createdAt)}</span>
          </div>

          <div className="mt-6 text-gray-800 leading-relaxed whitespace-pre-wrap">
            {review.content}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <Link
              href="/reviews/leave"
              className="inline-flex justify-center bg-orange-500 text-white px-5 py-2.5 rounded-xl shadow hover:bg-orange-600 transition"
            >
              Ostavi još recenzija
            </Link>

            <button
              onClick={handleDelete}
              className="inline-flex justify-center bg-red-500 text-white px-5 py-2.5 rounded-xl hover:bg-red-600 transition"
            >
              Obriši recenziju
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}