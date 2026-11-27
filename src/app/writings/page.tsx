import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Page } from "@/components/ui";
import { Topic } from "@/components/writings/topic";
import { formatDate, getPosts } from "@/lib/writings";

export const metadata: Metadata = { title: "Writings" };

export default function WritingsPage() {
  const posts = getPosts();
  const featured = posts.find((p) => p.featured) ?? posts[0];

  return (
    <Page className="max-w-[1040px]">
      <header className="max-w-[700px]">
        <div className="t-eyebrow text-ink-3">Writings</div>
        <h1 className="mt-4 mb-5 text-[clamp(40px,8vw,64px)] leading-[0.95] tracking-[-0.04em]">Writings</h1>
        <p className="text-[clamp(18px,2.4vw,22px)] leading-[1.3] tracking-[-0.01em] text-ink-2">Essays and notes on value: how it is defined, ranked, created, and exchanged.</p>
      </header>

      {featured && (
        <Link href={`/writings/${featured.slug}`} className="group mt-12 block rounded-[24px] bg-night p-7 text-white sm:p-10">
          <p className="t-eyebrow text-white/50">Featured · {formatDate(featured.date)}</p>
          <h2 className="mt-5 text-[clamp(30px,4.5vw,48px)] leading-[1.05] tracking-[-0.03em]">{featured.title}</h2>
          {featured.dek && <p className="t-b1 mt-4 max-w-[60ch] text-white/65">{featured.dek}</p>}
          <span className="mt-8 inline-flex items-center gap-1.5 text-[14px]">
            Read · {featured.minutes} min <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </Link>
      )}

      <section className="mt-16">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-[clamp(22px,3vw,28px)] tracking-[-0.02em]">All Writings</h2>
          <span className="t-mono text-ink-3">{posts.length} pieces</span>
        </div>
        <div className="border-t border-line-strong">
          {posts.map((p, i) => (
            <Link
              key={p.slug}
              href={`/writings/${p.slug}`}
              className="group grid grid-cols-[48px_1fr_auto] items-baseline gap-4 border-b border-line py-5 transition-colors hover:bg-control/60 sm:grid-cols-[64px_1fr_auto] sm:px-3"
            >
              <span className="t-mono tabular text-blue">{String(posts.length - i).padStart(2, "0")}</span>
              <span>
                <span className="block text-[19px] leading-[1.25] tracking-[-0.01em] group-hover:text-blue">{p.title}</span>
                {p.dek && <span className="t-b2 mt-1 block text-ink-2">{p.dek}</span>}
                <span className="mt-2 flex flex-wrap items-center gap-3">
                  <Topic topic={p.topic} />
                </span>
              </span>
              <span className="t-mono text-ink-3">{p.date}</span>
            </Link>
          ))}
          {posts.length === 0 && <p className="t-b2 py-8 text-ink-3">Nothing published yet.</p>}
        </div>
      </section>
    </Page>
  );
}
