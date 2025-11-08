import Link from "next/link";

export default function Home() {
  const sections = [
    { href: "/application-info", label: "Application Info" },
    { href: "/booking", label: "Booking" },
    { href: "/reviews", label: "Reviews" },
    { href: "/user", label: "User Account" },
    { href: "/auth/login", label: "Authentication" },
    { href: "/notifications", label: "Notifications" },
    { href: "/footer/contact", label: "Footer Pages" },
  ];
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">EasyCut</h1>
      <p className="text-sm">Skeleton aplikacija po sitemapu – routing i navigacija.</p>
      <ul className="list-disc pl-6">
        {sections.map(s => (
          <li key={s.href}>
            <Link className="underline" href={s.href}>{s.label}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
