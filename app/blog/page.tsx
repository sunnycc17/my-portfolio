import Link from "next/link";

const posts = [
  {
    slug: "why-i-build-things",
    title: "Why I Build Things",
    excerpt: "Curiosity, systems, and the long game of engineering.",
    date: "2026-01-20",
  },
  {
    slug: "learning-by-breaking",
    title: "Learning by Breaking",
    excerpt: "Most progress comes from controlled failure.",
    date: "2026-01-10",
  },
];

export default function BlogPage() {
  return (
    <section className="min-h-dvh py-32 px-14 md:px-20 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-12">
        Blog
      </h1>

      <div className="flex flex-col space-y-10">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block border-b border-white/10 pb-6"
          >
            <h2 className="text-2xl md:text-3xl font-semibold group-hover:text-orange-400 transition">
              {post.title}
            </h2>

            <p className="mt-2 text-lg opacity-70 max-w-2xl">
              {post.excerpt}
            </p>

            <p className="mt-2 text-sm opacity-50">
              {post.date}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
