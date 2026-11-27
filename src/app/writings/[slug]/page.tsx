import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Contents } from "@/components/writings/contents";
import { formatDate, getPost, getPosts, slugify } from "@/lib/writings";
import { Topic } from "@/components/writings/topic";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  return p ? { title: p.title, description: p.dek } : { title: "Writings" };
}

const text = (c: ReactNode): string => (typeof c === "string" ? c : Array.isArray(c) ? c.map(text).join("") : "");

export default async function WritingPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const all = getPosts();
  const i = all.findIndex((p) => p.slug === slug);
  const newer = all[i - 1];
  const older = all[i + 1];

  return (
    <div className="mx-auto max-w-[1200px] px-4 pt-10 pb-24 md:px-6 md:pb-[120px]">
      <Link href="/writings" className="t-b2 inline-flex items-center gap-1.5 text-ink-3 hover:text-ink">
        <ArrowLeft className="size-3.5" /> Writings
      </Link>
      <header className="mx-auto max-w-[860px] pt-10 pb-12 text-center">
        <p className="t-mono text-ink-3">
          {formatDate(post.date)} · {post.minutes} min read
        </p>
        <h1 className="mt-5 text-[clamp(40px,7vw,72px)] leading-[0.98] tracking-[-0.04em]">{post.title}</h1>
        {post.dek && <p className="t-b1 mx-auto mt-6 max-w-[60ch] text-ink-2">{post.dek}</p>}
        {post.topic && (
          <div className="mt-5">
            <Topic topic={post.topic} />
          </div>
        )}
      </header>
      {post.cover && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={post.cover} alt="" className="mb-16 aspect-[21/9] w-full rounded-[24px] object-cover" />
      )}

      <div className="grid gap-12 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="hidden lg:block">{post.headings.length > 0 && <Contents title={post.title} headings={post.headings} />}</aside>
        <article className="blog-body max-w-[720px]">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ children }) => <h2 id={slugify(text(children))}>{children}</h2>,
              h3: ({ children }) => <h3 id={slugify(text(children))}>{children}</h3>,
            }}
          >
            {post.body}
          </ReactMarkdown>
        </article>
      </div>

      {(older || newer) && (
        <nav className="mt-24 grid gap-3 border-t border-line pt-8 sm:grid-cols-2">
          {older ? (
            <Link href={`/writings/${older.slug}`} className="rounded-[16px] bg-surface p-5 shadow-[0_0_0_1px_var(--tds-line)] hover:shadow-[0_0_0_1px_var(--tds-line-strong)]">
              <span className="t-eyebrow flex items-center gap-1.5 text-ink-3">
                <ArrowLeft className="size-3" /> Older
              </span>
              <span className="mt-2 block text-[18px] tracking-[-0.01em]">{older.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {newer && (
            <Link href={`/writings/${newer.slug}`} className="rounded-[16px] bg-surface p-5 text-right shadow-[0_0_0_1px_var(--tds-line)] hover:shadow-[0_0_0_1px_var(--tds-line-strong)]">
              <span className="t-eyebrow flex items-center justify-end gap-1.5 text-ink-3">
                Newer <ArrowRight className="size-3" />
              </span>
              <span className="mt-2 block text-[18px] tracking-[-0.01em]">{newer.title}</span>
            </Link>
          )}
        </nav>
      )}
    </div>
  );
}
