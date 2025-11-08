"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/application-info", label: "Application Info" },
  { href: "/booking", label: "Booking" },
  { href: "/reviews", label: "Reviews" },
  { href: "/user", label: "User" },
  { href: "/auth/login", label: "Login" },
  { href: "/notifications", label: "Notifications" },
  { href: "/footer/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b">
      <nav className="mx-auto max-w-6xl flex flex-wrap items-center gap-4 p-4">
        <Link href="/" className="font-bold text-lg">EasyCut</Link>
        <ul className="flex flex-wrap gap-3 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`px-2 py-1 rounded hover:underline ${
                  pathname === l.href ? "font-semibold underline" : ""
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
