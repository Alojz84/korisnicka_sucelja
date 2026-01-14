"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/application-info", label: "Application Info" },
  { href: "/booking", label: "Booking" },
  { href: "/reviews", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/user", label: "User" },
  { href: "/auth/login", label: "Login" },
  { href: "/notifications", label: "Notifications" },
  { href: "/footer/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="navWrap">
      <div className="container">
        <div className="navBar">
          <Link className="brand" href="/">
            <span className="brandIcon">✂️</span>
            <span>EasyCut</span>
          </Link>

          <nav className="navLinks" aria-label="Primary">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={pathname === l.href ? "navActive" : undefined}
              >
                {l.label}
              </Link>
            ))}
            <Link className="cta" href="/booking">
              Rezerviraj
            </Link>
          </nav>

          <button
            className="burger"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {open && (
          <div className="mobileMenu">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={pathname === l.href ? "navActive" : undefined}
              >
                {l.label}
              </Link>
            ))}
            <Link className="cta" href="/booking" onClick={() => setOpen(false)}>
              Rezerviraj
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
