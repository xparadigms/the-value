import clsx from "clsx";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { neighbors, type Domain } from "@/data/site";

export function Page({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={clsx("mx-auto max-w-[920px] px-4 pt-14 pb-24 md:px-6 md:pt-[88px] md:pb-[120px]", className)}>{children}</div>;
}

export function PageHeader({ eyebrow, title, lede, dot }: { eyebrow: string; title: string; lede: string; dot?: string }) {
  return (
    <header className="max-w-[700px]">
      <div className="t-eyebrow flex items-center gap-2 text-ink-3">
        {dot && <span className="size-2 rounded-full" style={{ background: dot }} />}
        {eyebrow}
      </div>
      <h1 className="mt-4 mb-5 text-[clamp(40px,8vw,64px)] leading-[0.95] tracking-[-0.04em]">{title}</h1>
      <p className="text-[clamp(18px,2.4vw,22px)] leading-[1.3] tracking-[-0.01em] text-ink-2">{lede}</p>
    </header>
  );
}

export function H2({ id, idx, children }: { id: string; idx?: string; children: ReactNode }) {
  return (
    <h2 id={id} className="mt-[72px] mb-5 flex max-w-[700px] items-baseline gap-3.5 text-[clamp(24px,4vw,32px)] leading-[1.1] tracking-[-0.02em]">
      {idx && <span className="t-mono flex-none text-blue">{idx}</span>}
      {children}
    </h2>
  );
}

/** Long-form paragraphs; `**bold**` is not parsed, pass <strong> directly. */
export function Prose({ children }: { children: ReactNode }) {
  return <div className="t-prose max-w-[700px] text-ink-prose [&_p]:mb-[18px] [&_strong]:font-semibold [&_strong]:text-ink">{children}</div>;
}

export function Card({ eyebrow, caption, children, className }: { eyebrow?: string; caption?: string; children: ReactNode; className?: string }) {
  return (
    <figure className={clsx("my-10 rounded-[20px] bg-surface p-4 shadow-[0_0_0_1px_var(--tds-line)] md:p-6", className)}>
      {eyebrow && <div className="t-eyebrow text-ink-3">{eyebrow}</div>}
      {children}
      {caption && <figcaption className="t-b3 mt-4 border-t border-line pt-3 text-ink-3">{caption}</figcaption>}
    </figure>
  );
}

export function Steps({ items }: { items: { kick: string; title: string; text: string }[] }) {
  return (
    <div className={clsx("mt-3 grid gap-px overflow-hidden rounded-[12px] bg-line shadow-[0_0_0_1px_var(--tds-line)]", items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3")}>
      {items.map((s) => (
        <div key={s.title} className="bg-surface p-5">
          <div className="t-mono text-blue">{s.kick}</div>
          <div className="mt-3 mb-2 text-[20px] leading-[1.1] tracking-[-0.02em]">{s.title}</div>
          <div className="t-b2 text-ink-2">{s.text}</div>
        </div>
      ))}
    </div>
  );
}

/** Contents card: in-page anchors. */
export function Toc({ items }: { items: { id: string; label: string }[] }) {
  return (
    <Card eyebrow="Contents">
      <div className="mt-3 grid md:grid-cols-2 md:gap-x-8">
        {items.map((it, i) => (
          <a key={it.id} href={`#${it.id}`} className="flex items-baseline gap-3.5 border-t border-line py-[11px] text-[14px] leading-5 text-ink hover:text-blue">
            <span className="t-mono tabular text-blue">{String(i + 1).padStart(2, "0")}</span>
            <span>{it.label}</span>
          </a>
        ))}
      </div>
    </Card>
  );
}

/** The companion site for a domain, as a large outbound card. */
export function SiteCard({ d }: { d: Domain }) {
  if (!d.site) return null;
  return (
    <a
      href={d.site.url}
      target="_blank"
      rel="noreferrer"
      className="group my-10 flex flex-col gap-5 rounded-[20px] bg-night p-6 text-white transition-transform duration-300 hover:-translate-y-0.5 md:flex-row md:items-end md:justify-between md:p-8"
    >
      <div className="max-w-[520px]">
        <div className="t-eyebrow flex items-center gap-2 text-white/50">
          <span className="size-2 rounded-full" style={{ background: d.color }} />
          Go deeper · {d.site.host}
        </div>
        <div className="mt-4 text-[clamp(26px,4vw,36px)] leading-[1.05] tracking-[-0.03em]">{d.site.name}</div>
        <p className="t-b2 mt-3 text-white/65">{d.site.blurb}</p>
      </div>
      <span className="flex h-11 shrink-0 items-center gap-2 self-start rounded-full bg-white px-5 text-[14px] text-[#141414] md:self-auto">
        Open site
        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.8} />
      </span>
    </a>
  );
}

export function Pager({ href }: { href: string }) {
  const { prev, next } = neighbors(href);
  return (
    <nav aria-label="Pages" className="mt-24 grid gap-3 border-t border-line pt-8 sm:grid-cols-2">
      {prev ? (
        <Link href={prev.href} className="group rounded-[16px] bg-surface p-5 shadow-[0_0_0_1px_var(--tds-line)] hover:shadow-[0_0_0_1px_var(--tds-line-strong)]">
          <span className="t-eyebrow flex items-center gap-1.5 text-ink-3">
            <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" /> Previous
          </span>
          <span className="mt-2 block text-[18px] tracking-[-0.01em]">{prev.label}</span>
          {prev.sub && <span className="t-b2 text-ink-3">{prev.sub}</span>}
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link href={next.href} className="group rounded-[16px] bg-surface p-5 text-right shadow-[0_0_0_1px_var(--tds-line)] hover:shadow-[0_0_0_1px_var(--tds-line-strong)]">
          <span className="t-eyebrow flex items-center justify-end gap-1.5 text-ink-3">
            Next <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
          <span className="mt-2 block text-[18px] tracking-[-0.01em]">{next.label}</span>
          {next.sub && <span className="t-b2 text-ink-3">{next.sub}</span>}
        </Link>
      )}
    </nav>
  );
}
