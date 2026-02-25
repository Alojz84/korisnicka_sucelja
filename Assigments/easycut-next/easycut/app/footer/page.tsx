import Link from "next/link";

export default function FooterIndex() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-3">Footer Pages</h1>
      <ul className="list-disc pl-6 space-y-1">
        <li><Link className="underline" href="/footer/contact">Kontakt</Link></li>
        <li><Link className="underline" href="/footer/privacy-policy">Privacy Policy</Link></li>
        <li><Link className="underline" href="/footer/terms">Terms & Conditions</Link></li>
      </ul>
    </section>
  );
}
