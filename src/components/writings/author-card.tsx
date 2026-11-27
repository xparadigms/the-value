import { ArrowUpRight } from "lucide-react";
import { AUTHOR } from "@/data/author";

/** The author, shown beside (or below) an article. */
export function AuthorCard() {
  return (
    <section aria-label="Author" className="max-w-[420px] xl:max-w-none">
      <div className="flex items-center gap-3">
        <span className="t-eyebrow text-ink">Author</span>
        <span className="h-px flex-1 bg-line-strong" />
      </div>
      <a href={AUTHOR.site.href} target="_blank" rel="noreferrer" className="group mt-5 flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={AUTHOR.photo} alt={AUTHOR.name} width={56} height={56} className="size-14 shrink-0 rounded-full object-cover shadow-[0_0_0_1px_var(--tds-line)]" />
        <span className="min-w-0">
          <span className="block text-[17px] leading-tight tracking-[-0.01em] group-hover:text-blue">{AUTHOR.name}</span>
          <span className="t-b3 mt-0.5 block text-ink-3">{AUTHOR.koreanName}</span>
        </span>
      </a>
      <p className="t-b2 mt-4 text-ink-2">{AUTHOR.headline}</p>
      <p className="t-b2 mt-2 text-ink-3">{AUTHOR.bio}</p>
      <a
        href={AUTHOR.site.href}
        target="_blank"
        rel="noreferrer"
        className="group mt-5 flex h-10 items-center justify-between rounded-[12px] bg-control px-3.5 text-[14px] text-ink transition-colors hover:bg-ink hover:text-bg"
      >
        {AUTHOR.site.label}
        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.8} />
      </a>
      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
        {AUTHOR.links.map((l) => (
          <li key={l.label}>
            <a href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="t-b2 inline-flex items-center gap-0.5 text-ink-3 hover:text-ink">
              {l.label}
              <ArrowUpRight className="size-3" strokeWidth={1.8} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
