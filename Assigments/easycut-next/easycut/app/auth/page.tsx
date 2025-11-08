import Link from "next/link";

export default function AuthIndex() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-2">Authentication</h1>
      <ul className="list-disc pl-6 space-y-1">
        <li><Link className="underline" href="/auth/login">Log In</Link></li>
        <li><Link className="underline" href="/auth/signup">Sign Up</Link></li>
        <li><Link className="underline" href="/auth/forgot-password">Forgot Password</Link></li>
      </ul>
    </section>
  );
}
