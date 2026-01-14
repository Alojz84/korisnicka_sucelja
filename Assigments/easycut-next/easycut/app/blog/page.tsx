import Link from "next/link";
import PageHero from "@/components/PageHero";

type Post = { id: number; title: string; body: string };

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export default async function Page() {
  const posts = await getPosts();

  return (
    <>
      <PageHero
        title="EasyCut Blog"
        subtitle="Dynamic routes + server-side data fetching (JSONPlaceholder)."
      />

      <section className="section">
        <div className="container">
          <div className="linkGrid">
            {posts.slice(0, 12).map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="linkCard">
                <div>
                  <p className="linkTitle">{post.title}</p>
                  <p className="linkDesc">
                    {post.body.length > 90 ? post.body.slice(0, 90) + "…" : post.body}
                  </p>
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
