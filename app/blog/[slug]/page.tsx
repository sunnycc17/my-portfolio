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
I like creating things that are useful, that help people move forward in life.

Most of my work focuses on landing pages and portfolios. Creating aesthetic, clear and cohesive designs. A well-built page gives people a place to show what they can do, tell their story and connect with the right audience or clients. 

I see websites as tools. When done right, they remove friction, communicate value quickly, and turn attention into action.

One example that matters to me is a project I built for my client Andrew. Shortly after launching his site, he landed his first client directly because of it. That result mattered more than any visual polish. It proved the site was doing its job.

That project isn’t finished. My next goal is to improve its visibility and long-term performance. I’m now working on strengthening the site’s SEO so it can consistently attract the right traffic. That means diving into Google Search Console and other SEO tools, identifying weak points, improving structure, and expanding the site with useful, relevant content.

This is how I approach my work: build something solid, prove it works, then refine and scale it. Every project is a system that can be improved, and helping people get real results through what I build is the part I care about the most.


    `,
  },
  "Arch-Linux": {
    title: "Arch Linux",
    date: "2026-01-10",
    content: `
Most learning happens when something fails. If nothing breaks, nothing evolves.

My journey with Linux started about a year ago. I first tried Mint, very user friendly, almost identical to Windows, but lighter, faster, and better. I was using a broken €200 laptop with a Celeron processor, so I wanted to go as lightweight as possible. That’s when I tried Arch.

Back then, I didn’t want to read documentation or watch video tutorials, so unsurprisingly, I struggled a lot, and for no good reason. I also used ChatGPT for help, which somehow made things worse. I spent days just trying to connect to the internet. iwctl kept failing, and ChatGPT convinced me I needed to mess with IPv6 or DHCP (if I remember correctly).

Eventually, I plugged in my phone via USB, tethered the connection, downloaded NetworkManager, and everything worked perfectly. Wi-Fi connected instantly.

The lesson: if you want to use Arch, just run archinstall. Pick local mirrors, partition the disk, set a password, and you’re done. Do not try to do everything manually for the love of god.
    `,
  },
  Cybersecurity: {
    title: "Cybersecurity",
    date: "2026-02-11",
    content: `
A while ago I briefly explored TryHackMe and Hack The Box, but I stepped away to focus entirely on web development. That focus paid off. After building a solid foundation there, it feels like the right time to circle back to cybersecurity with a clearer direction and stronger technical base.

Getting back into Linux played a big role in that decision. Working in a Linux environment again naturally pulls me toward understanding systems more deeply  not just how to build applications, but how they behave, how they’re exposed, and how they’re attacked. Having web development experience now makes security concepts more concrete, since I can see both sides: how things are built and how they break.

At the moment, I’m revisiting the fundamentals rather than jumping straight into advanced material. I’m exploring the SOC analyst path to understand monitoring, logs, detection, and incident response from a defensive perspective, while also refreshing penetration testing basics to strengthen my offensive knowledge. I want a balanced view of both sides.

I’ve set up a Kali Linux virtual machine to create a small lab environment where I can experiment safely. I’m starting with widely used tools like nmap and netcat, focusing not just on running commands but on understanding what they actually do, what the outputs mean, and how they fit into real-world workflows.

This time, the goal isn’t casual exposure. It’s structured learning, deeper understanding, and building practical experience step by step.
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
        <h1 className="text-3xl md:text-4xl font-bold mb-4 highlight-secondary">
          {post.title}
        </h1>

        <time dateTime={post.date} className="text-sm opacity-80 mb-10 block">
          {post.date}
        </time>
      </header>

      <div className="prose prose-invert max-w-none text-lg lg:text-xl leading-relaxed">
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
