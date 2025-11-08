import Link from "next/link";
export default function Reviews() {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Reviews</h1>
      <ul className="list-disc pl-6">
        <li><Link className="underline" href="/reviews/leave">Leave Review</Link></li>
        <li><Link className="underline" href="/reviews/view">View Reviews</Link></li>
      </ul>
    </>
  );
}
