import Link from "next/link";

const quickLinks = [
  {
    title: "O aplikaciji",
    desc: "Ukratko o ideji i cilju aplikacije.",
    href: "/application-info/about",
    icon: "ℹ️",
  },
  {
    title: "Services",
    desc: "Pregled usluga i cijena/tretmana.",
    href: "/application-info/services",
    icon: "✂️",
  },
  {
    title: "Service Categories",
    desc: "Kategorije usluga (brže pronalaženje).",
    href: "/application-info/service-categories",
    icon: "🗂️",
  },
  {
    title: "Service Details",
    desc: "Detalji pojedine usluge (trajanje, opis).",
    href: "/application-info/service-details",
    icon: "📌",
  },
  {
    title: "Barberi",
    desc: "Popis barbera i osnovne informacije.",
    href: "/application-info/barbers",
    icon: "🧔‍♂️",
  },
  {
    title: "Barber Profiles",
    desc: "Profil barbera (opis, specijalnosti).",
    href: "/application-info/barber-profiles",
    icon: "👤",
  },
  {
    title: "Favorites",
    desc: "Spremi omiljene usluge ili barbere.",
    href: "/application-info/favorites",
    icon: "⭐",
  },
];

const features = [
  {
    title: "Brza rezervacija",
    desc: "Rezerviraj termin u par klikova uz jasan flow.",
    icon: "⚡",
  },
  {
    title: "Pregled barbera",
    desc: "Odaberi barbera prema stilu, iskustvu i profilu.",
    icon: "🧑‍💼",
  },
  {
    title: "Usluge i detalji",
    desc: "Sve usluge na jednom mjestu + trajanje i opis tretmana.",
    icon: "🧾",
  },
  {
    title: "Moderan UX",
    desc: "Čist izgled, kartice, jasne informacije i dobra čitljivost.",
    icon: "🎯",
  },
];

export default function ApplicationInfo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* HERO */}
        <div className="bg-white border rounded-3xl shadow-sm p-8 md:p-10">
          <div className="flex flex-col gap-8">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-orange-600 font-semibold">
                <span className="text-lg">✂️</span> EasyCut
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-2">
                Informacije o aplikaciji
              </h1>
              <p className="text-gray-600 mt-4 leading-relaxed">
                EasyCut je web aplikacija namijenjena jednostavnom i brzom
                rezerviranju termina u frizerskom salonu. Korisnicima omogućuje
                pregled dostupnih barbera, odabir tretmana te rezervaciju termina
                u nekoliko koraka.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center bg-orange-500 text-white px-6 py-3 rounded-2xl shadow hover:bg-orange-600 transition font-semibold"
                >
                  Rezerviraj termin
                </Link>

                <Link
                  href="/reviews"
                  className="inline-flex items-center justify-center border px-6 py-3 rounded-2xl hover:bg-gray-50 transition font-semibold text-gray-800"
                >
                  Pogledaj recenzije
                </Link>
              </div>

              {/* MINI STATS */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <Stat label="Brzi flow" value="3–4 koraka" />
                <Stat label="Ocjene" value="1–5 ★" />
                <Stat label="Usluge" value="kategorije" />
                <Stat label="Barberi" value="profili" />
              </div>
            </div>

          </div>
        </div>

        {/* FEATURES */}
        <div className="mt-10">
          <h2 className="text-2xl font-extrabold tracking-tight">
            Što EasyCut nudi
          </h2>
          <p className="text-gray-600 mt-2">
            Ključne funkcionalnosti i prednosti aplikacije.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white border rounded-3xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-orange-100 flex items-center justify-center text-2xl">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{f.title}</h3>
                    <p className="text-gray-600 mt-1 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4">
      <p className="text-xs text-gray-600">{label}</p>
      <p className="text-lg font-extrabold text-gray-900 mt-1">{value}</p>
    </div>
  );
}