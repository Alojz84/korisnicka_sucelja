// components/LandingPage.tsx
import Image from "next/image";

export default function LandingPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="heroBg" />
        <div className="heroOverlay" />
        <div className="heroInner">
          <div className="container center">
            <h1 className="heroTitle">Rezervirajte termin brzo i jednostavno</h1>
            <p className="heroSub">
              Pronađite najboljeg brijača, odaberite uslugu i termin — bez poziva i čekanja.
            </p>

            <div className="heroActions">
              {/* OVO LINKA NA VAŠU POSTOJEĆU FUNKCIONALNOST */}
              <a className="btn btnPrimary" href="/booking">Rezerviraj termin</a>
              <a className="btn btnOutline" href="/reviews">Pogledaj brijače</a>
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
              <div className="stepHead">
                <div className="stepNum">1</div>
                <div className="stepIcon">👥</div>
              </div>
              <div className="stepTitle">Odaberite brijača</div>
              <div className="stepText">Pregledajte profile brijača, njihove usluge, cijene i ocjene.</div>
            </div>

            <div className="stepCard">
              <div className="stepHead">
                <div className="stepNum">2</div>
                <div className="stepIcon">📅</div>
              </div>
              <div className="stepTitle">Odaberite uslugu i termin</div>
              <div className="stepText">Izaberite željenu uslugu i slobodan datum i vrijeme.</div>
            </div>

            <div className="stepCard">
              <div className="stepHead">
                <div className="stepNum">3</div>
                <div className="stepIcon">✅</div>
              </div>
              <div className="stepTitle">Potvrdite rezervaciju</div>
              <div className="stepText">Potvrda stiže odmah — bez poziva i čekanja.</div>
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
              { img: "/landing/service-1.jpg", title: "Šišanje", text: "Profesionalno šišanje prilagođeno vašem stilu i preferencijama." },
              { img: "/landing/service-2.jpg", title: "Trimanje brade", text: "Precizno oblikovanje i trimanje brade za savršen izgled." },
              { img: "/landing/service-3.jpg", title: "Stiliziranje", text: "Moderne tehnike stiliziranja za moderan i svjež izgled." },
              { img: "/landing/service-4.jpg", title: "Kombinirane usluge", text: "Šišanje + brada - Kompletna njega u jednom terminu." },
            ].map((s) => (
              <div className="mediaCard" key={s.title}>
                <div className="mediaTop">
                  <Image src={s.img} alt={s.title} fill style={{ objectFit: "cover" }} />
                  <div className="mediaLabel">{s.title}</div>
                </div>
                <div className="mediaBody">{s.text}</div>
              </div>
            ))}
          </div>

          <div className="centerBtn">
            <a className="btn btnOutline" href="/booking">Pogledaj sve usluge</a>
          </div>
        </div>
      </section>

      {/* BARBERS */}
      <section className="section">
        <div className="container center">
          <h2 className="h2">Upoznajte naše brijače</h2>
          <p className="p">
            Iskusni i provjereni brijači s jasno prikazanim cijenama, dostupnim terminima i recenzijama korisnika.
          </p>

          <div className="gridBarbers">
            {[
              { img: "/landing/barber-1.jpg", name: "Marko Petrović", tag: "Klasično šišanje i brijanje", rating: "4.9", count: "127", loc: "Zagreb, Centar", exp: "8+ godina iskustva" },
              { img: "/landing/barber-2.jpg", name: "Ivan Kovač", tag: "Moderni stilovi i fade", rating: "5", count: "95", loc: "Zagreb, Trešnjevka", exp: "6+ godina iskustva" },
              { img: "/landing/barber-3.jpg", name: "Luka Novak", tag: "Njega brade i styling", rating: "4.8", count: "143", loc: "Zagreb, Dubrava", exp: "10+ godina iskustva" },
            ].map((b) => (
              <div className="barberCard" key={b.name}>
                <div className="barberTop">
                  <Image src={b.img} alt={b.name} fill style={{ objectFit: "cover" }} />
                  <div className="ratingPill">
                    <span className="star">★</span>
                    <span>{b.rating}</span>
                    <span style={{ color: "#6b7280", fontWeight: 700 }}>({b.count})</span>
                  </div>
                </div>
                <div className="barberBody" style={{ textAlign: "left" }}>
                  <h3 className="barberName">{b.name}</h3>
                  <div className="barberTag">{b.tag}</div>
                  <div className="meta">
                    <div className="metaRow"><span className="metaIcon">📍</span><span>{b.loc}</span></div>
                    <div className="metaRow"><span className="metaIcon">🕒</span><span>{b.exp}</span></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="centerBtn">
            <a className="btn btnOutline" href="/reviews">Pogledaj brijače</a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container center">
          <h2 className="h2">Što korisnici kažu o nama?</h2>

          <div className="grid3" style={{ marginTop: 44 }}>
            {[
              { q: "Brzo sam rezervirao termin bez poziva. Sve je bilo jasno i jednostavno.", by: "David M." },
              { q: "Super aplikacija! Lako pronađem novog brijača i slobodan termin.", by: "Ana K." },
              { q: "Volim što mogu planirati unaprijed i dobiti potvrdu odmah.", by: "Luka R." },
            ].map((t) => (
              <div className="testCard" key={t.by} style={{ textAlign: "left" }}>
                <div className="stars">★★★★★</div>
                <div className="quote">"{t.q}"</div>
                <div className="by">— {t.by}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DARK BENEFITS */}
      <section className="section dark">
        <div className="container center">
          <h2 className="h2">Zašto koristiti našu aplikaciju?</h2>

          <div className="benefitsGrid">
            {[
              { icon: "✅", text: "Brza i jednostavna online rezervacija" },
              { icon: "📅", text: "Pregled stvarno dostupnih termina" },
              { icon: "⭐", text: "Provjereni brijači i stvarne recenzije" },
              { icon: "👥", text: "Upravljanje terminima na jednom mjestu" },
              { icon: "📞", text: "Bez telefonskih poziva i čekanja" },
            ].map((b) => (
              <div className="benefit" key={b.text}>
                <div className="benefitIcon">{b.icon}</div>
                <div className="benefitText">{b.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORANGE CTA */}
      <section className="orange">
        <div className="container orangeInner center">
          <h2 className="orangeTitle">Spremni za novi termin?</h2>
          <p className="orangeSub">Rezervirajte svoj sljedeći termin kod brijača u samo nekoliko klikova.</p>
          <div className="orangeBtnRow">
            <a className="orangeBtn" href="/booking">
              Započni rezervaciju <span aria-hidden="true">›</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footerGrid">
            <div>
              <h3 className="footerTitle">Barber Booking App</h3>
              <div className="footerText">
                Najlakši način za rezervaciju termina kod vašeg omiljenog brijača. Brzo, jednostavno i bez čekanja.
              </div>

              <div className="footerContact">
                <div>✉️ info@barberbooking.hr</div>
                <div>📞 +385 1 234 5678</div>
                <div>📍 Zagreb, Hrvatska</div>
              </div>
            </div>

            <div>
              <h3 className="footerTitle">O nama</h3>
              <ul className="footerList">
                <li><a href="#">O salonu</a></li>
                <li><a href="#kontakt">Kontakt</a></li>
              </ul>
            </div>

            <div>
              <h3 className="footerTitle">Pravno</h3>
              <ul className="footerList">
                <li><a href="#">Pravila privatnosti</a></li>
                <li><a href="#">Uvjeti korištenja</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
