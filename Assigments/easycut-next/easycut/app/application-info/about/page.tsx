export default function AboutPage() {
  return (
    <section>
      <h2 className="text-2xl font-extrabold">Aplikacija EasyCut</h2>
      <p className="text-gray-600 mt-3 leading-relaxed">
        EasyCut je web aplikacija za jednostavno rezerviranje termina u
        frizerskom salonu. Cilj je smanjiti čekanje i pojednostaviti proces
        rezervacije.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Card title="Problem" text="Telefonske rezervacije i gužve." />
        <Card title="Rješenje" text="Online rezervacija u nekoliko klikova." />
        <Card title="Korisnici" text="Klijenti i barber saloni." />
        <Card title="Tehnologija" text="Next.js, React, Tailwind CSS." />
      </div>
    </section>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="border rounded-2xl p-5 bg-gray-50">
      <h3 className="font-bold">{title}</h3>
      <p className="text-gray-600 mt-1">{text}</p>
    </div>
  );
}