"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import type { Heading } from "@/lib/writings";

/** Sticky "Contents" list for an article; highlights the section in view. */
export function Contents({ title, headings }: { title: string; headings: Heading[] }) {
  const [active, setActive] = useState<string | null>(headings[0]?.id ?? null);
  useEffect(() => {
    const els = headings.map((h) => document.getElementById(h.id));
    let raf = 0;
    const measure = () => {
      raf = 0;
      let cur = headings[0]?.id ?? null;
      els.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.3) cur = headings[i].id;
      });
      setActive((prev) => (prev === cur ? prev : cur));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [headings]);

  return (
    <nav aria-label="Contents" className="sticky top-[calc(var(--gnb-h)+40px)]">
      <div className="flex items-center gap-3">
        <span className="t-eyebrow text-ink">Contents</span>
        <span className="h-px flex-1 bg-line-strong" />
      </div>
      <p className="t-b2 mt-5 text-ink-2">{title}</p>
      <ul className="mt-5 border-l border-line-strong">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={clsx(
                "-ml-px block border-l py-2 text-[14.5px] transition-colors",
                h.level === 3 ? "pl-9" : "pl-5",
                active === h.id ? "border-ink text-ink" : "border-transparent text-ink-3 hover:text-ink",
              )}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
