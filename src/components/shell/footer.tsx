"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DOMAINS, PAGES } from "@/data/site";
import { LogoMark } from "./logo";
import { ThemeToggle } from "./theme-toggle";

export function Footer() {
  if (usePathname() === "/login") return null;
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-12 md:grid-cols-[1.2fr_1fr_1fr] md:px-6">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid size-7 place-items-center rounded-[8px] bg-night">
              <LogoMark />
            </span>
            <span className="text-[15px] tracking-[-0.02em]">The Value</span>
          </div>
          <p className="t-b2 mt-3 max-w-[320px] text-ink-3">How culture, politics, industry, and finance are connected through one concept: value.</p>
          <div className="mt-5 flex items-center gap-3">
            <span className="t-eyebrow text-ink-3">Theme</span>
            <ThemeToggle />
          </div>
        </div>
        <div>
          <p className="t-eyebrow text-ink-3">Thesis</p>
          <ul className="mt-3 space-y-2">
            {PAGES.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="t-b2 text-ink-2 hover:text-ink">
                  {n.label}
                  {n.sub && <span className="text-ink-3"> · {n.sub}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="t-eyebrow text-ink-3">Sites</p>
          <ul className="mt-3 space-y-2">
            {DOMAINS.filter((d) => d.site).map((d) => (
              <li key={d.slug}>
                <a href={d.site!.url} target="_blank" rel="noreferrer" className="t-b2 inline-flex items-center gap-2 text-ink-2 hover:text-ink">
                  <span className="size-1.5 rounded-full" style={{ background: d.color }} />
                  {d.site!.name}
                  <ArrowUpRight className="size-3.5 text-ink-3" strokeWidth={1.8} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-[1200px] border-t border-line px-4 py-5 md:px-6">
        <p className="t-eyebrow text-ink-3">Working thesis, November 2026</p>
      </div>
    </footer>
  );
}
