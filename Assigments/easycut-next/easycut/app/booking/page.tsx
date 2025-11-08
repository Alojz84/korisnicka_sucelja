import Link from "next/link";
const steps = ["select-barber", "choose-service", "pick-datetime", "confirm-appointment"];
export default function Booking() {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Booking</h1>
      <ol className="list-decimal pl-6 space-y-1">
        {steps.map(s => (
          <li key={s}><Link className="underline" href={`/booking/${s}`}>{s}</Link></li>
        ))}
      </ol>
    </>
  );
}
