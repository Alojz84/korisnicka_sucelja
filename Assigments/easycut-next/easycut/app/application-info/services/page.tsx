const services = [
  { name: "Muško šišanje", duration: "30 min", price: "15 €" },
  { name: "Brada", duration: "20 min", price: "10 €" },
  { name: "Šišanje + brada", duration: "45 min", price: "22 €" },
];

export default function ServicesPage() {
  return (
    <section>
      <h2 className="text-2xl font-extrabold">Usluge</h2>
      <p className="text-gray-600 mt-2">
        Pregled dostupnih usluga u salonu.
      </p>

      <div className="mt-6 space-y-4">
        {services.map((s) => (
          <div
            key={s.name}
            className="flex items-center justify-between border rounded-2xl p-5 hover:bg-gray-50 transition"
          >
            <div>
              <p className="font-semibold">{s.name}</p>
              <p className="text-sm text-gray-500">{s.duration}</p>
            </div>
            <span className="font-bold text-orange-600">{s.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}