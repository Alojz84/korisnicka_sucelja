const barbers = [
  { name: "Ivan", specialty: "Fade i moderne frizure" },
  { name: "Marko", specialty: "Klasične frizure" },
  { name: "Luka", specialty: "Stiliziranje brade" },
];

export default function BarbersPage() {
  return (
    <section>
      <h2 className="text-2xl font-extrabold">Barberi</h2>
      <p className="text-gray-600 mt-2">
        Upoznaj naš tim profesionalnih barbera.
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {barbers.map((b) => (
          <div
            key={b.name}
            className="border rounded-3xl p-6 flex items-start gap-4"
          >
            <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center font-bold">
              {b.name[0]}
            </div>
            <div>
              <p className="font-bold">{b.name}</p>
              <p className="text-gray-600 text-sm">{b.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}