import Link from "next/link";
import PageHero from "@/components/PageHero";

export default function Reviews() {
  return (
    <>
      <PageHero title="Recenzije" subtitle="Pregled i ostavljanje recenzija za brijače." />

      <section className="section">
        <div className="container">
          <div className="linkGrid">
            <Link href="/reviews/leave" className="linkCard">
              <div>
                <p className="linkTitle">Leave Review</p>
                <p className="linkDesc">Ostavi recenziju nakon termina</p>
              </div>
              <span className="linkArrow">›</span>
            </Link>

            <Link href="/reviews/view" className="linkCard">
              <div>
                <p className="linkTitle">View Reviews</p>
                <p className="linkDesc">Pregledaj sve recenzije</p>
              </div>
              <span className="linkArrow">›</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
