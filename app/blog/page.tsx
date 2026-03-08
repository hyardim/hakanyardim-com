import Link from "next/link";
import React from "react";

const POSTS = [
  {
    slug: "winners-curse",
    title: "The Winner's Curse: Why Winning an Auction Might Be Your Biggest Mistake",
    excerpt: "Unraveling the game theory myth of why winning a bidding process could actually guarantee a negative expected profit.",
    date: "2026-03-07",
    readTime: "7 min read",
    tags: ["Game Theory", "Probability", "Python"],
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0d0b08] text-white selection:bg-amber-500/30">
      {/* Subtle top glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-amber-500/[0.04] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 py-16 md:py-24">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-amber-400 transition-colors duration-300 mb-14"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back to home
        </Link>

        {/* Header */}
        <header className="mb-16 animate-fade-up">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-500/80 mb-3">Writing</p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            Blog
          </h1>
          <p className="mt-3 text-stone-400 text-sm leading-relaxed max-w-md">
            Writing about data analysis, game theory, system design, and the math behind it all.
          </p>
          <div className="mt-5 h-px w-20 bg-gradient-to-r from-amber-500/60 to-transparent" />
        </header>

        {/* Posts list */}
        <div className="space-y-3">
          {POSTS.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block animate-fade-up group"
              style={{ "--delay": `${100 + i * 80}ms` } as React.CSSProperties}
            >
              <article className="relative rounded-2xl border border-white/[0.05] bg-stone-900/20 p-7 transition-all duration-500 hover:border-amber-500/25 hover:bg-stone-900/40 overflow-hidden">
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-amber-500/[0.04] to-transparent pointer-events-none" />

                <div className="relative">
                  {/* Date + read time */}
                  <div className="flex items-center gap-2 mb-4">
                    <time className="text-[11px] text-stone-500 tabular-nums">{formatDate(post.date)}</time>
                    <span className="text-stone-700">&middot;</span>
                    <span className="text-[11px] text-stone-500">{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors duration-300 leading-snug">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="mt-2.5 text-sm text-stone-400 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Footer row */}
                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-amber-500/10 bg-amber-500/[0.04] px-2 py-0.5 text-[10px] text-amber-600/80 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-[11px] text-stone-600 group-hover:text-amber-500 transition-colors duration-300 flex items-center gap-1">
                      Read
                      <svg className="w-3 h-3 translate-x-0 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center animate-fade-up" style={{ "--delay": "500ms" } as React.CSSProperties}>
          <p className="text-[11px] text-stone-700">More posts coming soon...</p>
        </div>
      </div>
    </main>
  );
}
