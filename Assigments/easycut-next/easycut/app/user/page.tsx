import Link from "next/link";
import PageHero from "@/components/PageHero";

const items = ["dashboard", "profile", "my-bookings", "settings"];

export default function User() {
  return (
    <>
      <PageHero title="Korisnički račun" subtitle="Profil, rezervacije i postavke na jednom mjestu." />

      <section className="section">
        <div className="container">
          <div className="linkGrid">
            {items.map((i) => (
              <Link key={i} href={`/user/${i}`} className="linkCard">
                <div>
                  <p className="linkTitle">{i}</p>
                  <p className="linkDesc">Otvori sekciju</p>
                </div>
                <span className="linkArrow">›</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
