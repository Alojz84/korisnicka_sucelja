import Link from "next/link";
const pages = [
  "services",
  "service-categories",
  "service-details",
  "barbers",
  "barber-profiles",
  "favorites",
  "about",
];
export default function ApplicationInfo() {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Application Info</h1>
      <ul className="space-y-2">
        {pages.map(p => (
          <li key={p}><Link className="underline" href={`/application-info/${p}`}>{p}</Link></li>
        ))}
      </ul>
    </>
  );
}
