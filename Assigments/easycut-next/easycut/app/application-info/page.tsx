import Link from "next/link";
import PageHero from "@/components/PageHero";

const pages = ["services","service-categories","service-details","barbers","barber-profiles","favorites","about"];

export default function ApplicationInfo() {
  return (
    <>
      <PageHero title="Application Info" subtitle="Stranice i informacije o aplikaciji." />

      <section className="section">
        <div className="container">
          <div className="linkGrid">
            {pages.map((p) => (
              <Link key={p} href={`/application-info/${p}`} className="linkCard">
                <div>
                  <p className="linkTitle">{p}</p>
                  <p className="linkDesc">Otvori stranicu</p>
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
