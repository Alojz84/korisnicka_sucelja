import Link from "next/link";
const items = ["dashboard", "profile", "my-bookings", "settings"];
export default function User() {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">User Account</h1>
      <ul className="space-y-2">
        {items.map(i => (
          <li key={i}><Link className="underline" href={`/user/${i}`}>{i}</Link></li>
        ))}
      </ul>
    </>
  );
}
