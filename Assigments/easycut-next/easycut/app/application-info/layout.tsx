import Link from "next/link";

const links = [
  { href: "/application-info/about", label: "O aplikaciji" },
  { href: "/application-info/services", label: "Usluge" },
  { href: "/application-info/barbers", label: "Brijači" },
];

export default function ApplicationInfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* HEADER */}
        <div className="mb-10">
          <p className="text-orange-600 font-semibold">EasyCut</p>
          <h1 className="text-4xl font-extrabold tracking-tight">
            Informacije o aplikaciji
          </h1>
          <p className="text-gray-600 mt-2">
            Sve informacije o aplikaciji, uslugama i barberima.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
          {/* SIDEBAR */}
          <aside className="bg-white border rounded-3xl p-5 h-fit sticky top-6">
            <nav className="space-y-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block px-4 py-2 rounded-xl text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </aside>

          {/* CONTENT */}
          <main className="bg-white border rounded-3xl p-8 shadow-sm">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}