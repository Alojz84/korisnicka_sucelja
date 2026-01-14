import Link from "next/link";
import PageHero from "@/components/PageHero";

const steps = ["select-barber", "choose-service", "pick-datetime", "confirm-appointment"];

export default function Booking() {
  return (
    <>
      <PageHero
        title="Rezervacija"
        subtitle="Odaberite brijača, uslugu i termin – bez poziva i čekanja."
      />

      <section className="section">
        <div className="container">
          <div className="linkGrid">
            {steps.map((s) => (
              <Link key={s} href={`/booking/${s}`} className="linkCard">
                <div>
                  <p className="linkTitle">{s}</p>
                  <p className="linkDesc">Otvori korak rezervacije</p>
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
