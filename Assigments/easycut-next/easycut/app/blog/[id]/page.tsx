import Link from "next/link";
import { notFound } from "next/navigation";

type Post = {
  id: number;
  title: string;
  body: string;
};

export async function generateStaticParams() {
  // uzmi prvih 10 postova da Next "zna" koje id-eve očekivati
  return Array.from({ length: 10 }, (_, i) => ({ id: String(i + 1) }));
}

async function getPost(id: string): Promise<Post | null> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Failed to fetch post");

  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  if (!params?.id) notFound();

  const post = await getPost(params.id);
  if (!post) notFound();

  return (
    <main className="mx-auto max-w-3xl space-y-6">
      <Link className="text-sm hover:underline" href="/blog">
        ← Back to blog
      </Link>

      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="leading-7 opacity-90">{post.body}</p>
    </main>
  );
}
