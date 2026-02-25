"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Početna" },
  { href: "/application-info", label: "O aplikaciji" },
  { href: "/reviews", label: "Recenzije" },
  { href: "/contact", label: "Kontakt" },
];

type Me = { id: string; email: string; name: string } | null;

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [me, setMe] = useState<Me>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    fetch("/api/auth/me", { cache: "no-store" as any })
      .then((r) => r.json())
      .then((data) => setMe(data))
      .catch(() => setMe(null))
      .finally(() => setChecked(true));
  }, [pathname]);

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    setMe(null);
    router.refresh();
    router.push("/");
  }

  const AuthItem = () => {
    if (!checked) return null;

    if (me) {
      return (
        <button className="cta" onClick={logout} type="button">
          Odjava
        </button>
      );
    }

    return (
      <Link className={pathname === "/auth/login" ? "navActive" : undefined} href="/auth/login">
        Prijava
      </Link>
    );
  };

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

            <AuthItem />

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

            {checked && (
              me ? (
                <button className="cta" onClick={() => { setOpen(false); logout(); }} type="button">
                  Odjava
                </button>
              ) : (
                <Link
                  href="/auth/login"
                  onClick={() => setOpen(false)}
                  className={pathname === "/auth/login" ? "navActive" : undefined}
                >
                  Prijava
                </Link>
              )
            )}

            <Link className="cta" href="/booking" onClick={() => setOpen(false)}>
              Rezerviraj
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
