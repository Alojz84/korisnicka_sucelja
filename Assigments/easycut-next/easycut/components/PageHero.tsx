// components/PageHero.tsx
export default function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="pageHero">
      <div className="pageHeroBg" />
      <div className="pageHeroOverlay" />
      <div className="container pageHeroInner">
        <h1 className="pageTitle">{title}</h1>
        {subtitle && <p className="pageSubtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
