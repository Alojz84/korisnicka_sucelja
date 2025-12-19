import Link from "next/link";

type Post = {
  id: number;
  title: string;
  body: string;
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export default async function Page() {
  const posts = await getPosts();

  return (
    <main className="mx-auto max-w-3xl space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">EasyCut Blog</h1>
        <p className="text-sm opacity-80">
          Dynamic routes + server-side data fetching (JSONPlaceholder).
        </p>
      </header>

      <section className="space-y-4">
        {posts.slice(0, 10).map((post) => (
          <article key={post.id} className="rounded-xl border p-4 space-y-2">
            <h2 className="text-lg font-semibold">
              <Link className="hover:underline" href={`/blog/${post.id}`}>
                {post.title}
              </Link>
            </h2>
            <p className="text-sm opacity-80">
              {post.body.length > 140 ? post.body.slice(0, 140) + "…" : post.body}
            </p>
            <Link className="text-sm hover:underline" href={`/blog/${post.id}`}>
              Read more →
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}