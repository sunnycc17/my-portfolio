import { notFound } from "next/navigation";
import Link from "next/link";

type Post = {
  title: string;
  date: string;
  content: string;
};

const posts: Record<string, Post> = {
  "why-i-build-things": {
    title: "Why I Build Things",
    date: "2026-01-20",
    content: `
I like creating things that are useful, things that help people move forward in life.

Most of my work focuses on landing pages and portfolios. Creating aesthetic, clear and cohesive designs. A well-built page gives people a place to show what they can do, tell their story and connect with the right audience or clients. 

I see websites as tools. When done right, they remove friction, communicate value quickly, and turn attention into action.

One example that matters to me is a project I built for my client Andrew. Shortly after launching his site, he landed his first client directly because of it. That result mattered more than any visual polish. It proved the site was doing its job.

That project isn’t finished. My next goal is to improve its visibility and long-term performance. I’m now working on strengthening the site’s SEO so it can consistently attract the right traffic. That means diving into Google Search Console and other SEO tools, identifying weak points, improving structure, and expanding the site with useful, relevant content.

This is how I approach my work: build something solid, prove it works, then refine and scale it. Every project is a system that can be improved, and helping people get real results through what I build is the part I care about the most.


    `,
  },
  "learning-by-breaking": {
    title: "Learning by Breaking",
    date: "2026-01-10",
    content: `
Most learning happens when something fails.

If nothing breaks, nothing evolves.
    `,
  },
};

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const post = posts[slug];

  if (!post) notFound();

  return (
    <article className="min-h-dvh py-32 px-4 md:px-6 max-w-4xl mx-auto">
      <header>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 highlight-secondary">{post.title}</h1>

        <time dateTime={post.date} className="text-sm opacity-80 mb-10 block">
          {post.date}
        </time>
      </header>

      <div className="prose prose-invert max-w-none text-lg leading-relaxed">
        {post.content
          .trim()
          .split(/\n\s*\n/)
          .map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
      </div>
      <nav aria-label="Breadcrumb">
        <Link
          href="/blog"
          className="flex items-center gap-2 pt-8 text-xl font-bold text-orange-400 group"
        >
          <span className="transform transition-all group-hover:translate-x-2">
            →
          </span>
          Back to the Blog
        </Link>
      </nav>
    </article>
  );
}
