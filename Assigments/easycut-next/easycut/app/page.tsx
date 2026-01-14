"use client";

import { useMemo } from "react";

export default function Home() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="heroBg" />
        <div className="heroOverlay" />
        <div className="heroInner">
          <div className="container center">
            <h1 className="heroTitle">
              Rezervirajte termin kod brijača brzo i jednostavno
            </h1>
            <p className="heroSub">
              Pronađite najboljeg brijača, odaberite uslugu i termin — bez poziva i
              čekanja.
            </p>

            <div className="heroActions">
              <a className="btn btnPrimary" href="/booking">
                Rezerviraj termin
              </a>
              <a className="btn btnOutline" href="/reviews">
                Pogledaj brijače
              </a>
            </div>

            <div className="heroScroll" aria-hidden="true">🖱️</div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container center">
          <h2 className="h2">Kako funkcionira?</h2>

          <div className="grid3">
            <div className="stepCard">
              <div className="stepNum">01</div>
              <div className="stepIcon">👥</div>
              <div className="stepTitle">Odaberite brijača</div>
              <div className="stepText">
                Pregledajte profile brijača, njihove usluge, cijene i ocjene.
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNum">02</div>
              <div className="stepIcon">📅</div>
              <div className="stepTitle">Odaberite uslugu i termin</div>
              <div className="stepText">
                Izaberite željenu uslugu i slobodan datum i vrijeme.
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNum">03</div>
              <div className="stepIcon">✅</div>
              <div className="stepTitle">Potvrdite rezervaciju</div>
              <div className="stepText">
                Potvrda stiže odmah — bez poziva i čekanja.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container center">
          <h2 className="h2">Naše usluge</h2>

          <div className="grid4">
            {[
              { img: "/landing/service-1.jpg", title: "Šišanje", text: "Profesionalno šišanje prilagođeno vašem stilu." },
              { img: "/landing/service-2.jpg", title: "Trimanje brade", text: "Precizno oblikovanje i trimanje brade." },
              { img: "/landing/service-3.jpg", title: "Styling", text: "Moderan styling za fresh look." },
              { img: "/landing/service-4.jpg", title: "Kombinirane usluge", text: "Šišanje + brada u jednom terminu." },
            ].map((s) => (
              <div className="mediaCard" key={s.title}>
                <div className="mediaTop">
                  <img src={s.img} alt={s.title} />
                  <div className="mediaLabel">{s.title}</div>
                </div>
                <div className="mediaBody">{s.text}</div>
              </div>
            ))}
          </div>

          <div className="centerBtn">
            <a className="btn btnOutline" href="/booking">
              Pogledaj sve usluge
            </a>
          </div>
        </div>
      </section>

      {/* BARBERS */}
      <section className="section">
        <div className="container center">
          <h2 className="h2">Upoznajte naše brijače</h2>
          <p className="p">
            Iskusni i provjereni brijači s jasno prikazanim cijenama i
            recenzijama.
          </p>

          <div className="gridBarbers">
            {[
              { img: "/landing/barber-1.jpg", name: "Marko Petrović", rating: "4.9", count: "127", loc: "Zagreb", exp: "8+ godina" },
              { img: "/landing/barber-2.jpg", name: "Ivan Kovač", rating: "5.0", count: "95", loc: "Split", exp: "6+ godina" },
              { img: "/landing/barber-3.jpg", name: "Luka Novak", rating: "4.8", count: "143", loc: "Rijeka", exp: "10+ godina" },
            ].map((b) => (
              <div className="barberCard" key={b.name} style={{ textAlign: "left" }}>
                <div className="barberTop">
                  <img src={b.img} alt={b.name} />
                  <div className="ratingPill">
                    <span className="star">★</span>
                    <span>{b.rating}</span>
                    <span style={{ color: "#6b7280", fontWeight: 800 }}>
                      ({b.count})
                    </span>
                  </div>
                </div>

                <div className="barberBody">
                  <h3 className="barberName">{b.name}</h3>
                  <div className="meta">
                    <div className="metaRow">📍 {b.loc}</div>
                    <div className="metaRow">🕒 {b.exp}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORANGE CTA */}
      <section className="orange">
        <div className="container orangeInner center">
          <h2 className="orangeTitle">Spremni za novi termin?</h2>
          <p className="orangeSub">
            Rezervirajte svoj sljedeći termin kod brijača u samo nekoliko klikova.
          </p>
          <div className="orangeBtnRow">
            <a className="orangeBtn" href="/booking">
              Započni rezervaciju →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          © {year} EasyCut — Barber Booking App
        </div>
      </footer>
    </main>
  );
}
