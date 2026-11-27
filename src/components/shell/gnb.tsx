"use client";

import clsx from "clsx";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CREDIT, DOMAINS, WRITINGS, NAV_PAIRS, type NavItem } from "@/data/site";
import { LogoMark } from "./logo";
import { ThemeToggle } from "./theme-toggle";

const EASE_ENTER = [0.05, 0.7, 0.1, 1] as const;
const isActive = (pathname: string, href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/"));

function Wordmark() {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2.5">
      <span className="grid size-7 place-items-center overflow-hidden rounded-[8px] bg-night text-white">
        <LogoMark />
      </span>
      <span className="text-[15px] leading-none tracking-[-0.02em]">The Value</span>
    </Link>
  );
}

function NavLink({ item, id }: { item: NavItem; id: string }) {
  const pathname = usePathname();
  const active = isActive(pathname, item.href);
  return (
    <Link
      href={item.href}
      title={item.sub}
      aria-current={active ? "page" : undefined}
      className={clsx(
        "relative flex h-9 shrink-0 items-center gap-2 rounded-[10px] px-3 text-[14px] whitespace-nowrap transition-colors duration-200",
        active ? "text-ink" : "text-ink-2 hover:bg-control hover:text-ink",
      )}
    >
      {active && <motion.span layoutId={`gnb-${id}`} className="absolute inset-0 rounded-[10px] bg-control" transition={{ duration: 0.45, ease: EASE_ENTER }} />}
      {item.color && <span className="relative size-1.5 rounded-full" style={{ background: item.color }} />}
      <span className="relative">{item.label}</span>
    </Link>
  );
}

const Divider = () => <span aria-hidden className="mx-2 h-5 w-px shrink-0 bg-line-strong" />;

/** The two pairs: Definition, System // Creation, Exchange. */
function PairLinks({ id }: { id: string }) {
  return (
    <>
      {NAV_PAIRS.map((pair, i) => (
        <div key={pair.label} className="flex items-center">
          {i > 0 && <Divider />}
          <div role="group" aria-label={pair.label} className="flex items-center gap-0.5">
            {pair.items.map((item) => (
              <NavLink key={item.href} item={item} id={id} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

/** Compact swipeable row for narrow screens; keeps the current page's tab in view. */
function CompactNav() {
  const pathname = usePathname();
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current?.querySelector<HTMLElement>('[aria-current="page"]');
    const row = ref.current?.parentElement;
    if (el && row && row.scrollWidth > row.clientWidth) row.scrollTo({ left: el.offsetLeft - (row.clientWidth - el.offsetWidth) / 2, behavior: "smooth" });
  }, [pathname]);
  return (
    <nav ref={ref} aria-label="Main (compact)" className="flex w-max items-center">
      <PairLinks id="narrow" />
      <Divider />
      <NavLink item={CREDIT} id="narrow" />
      <NavLink item={WRITINGS} id="narrow" />
    </nav>
  );
}

/** "Sites" menu: the three companion sites, one per domain. */
function SitesMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent ? e.key === "Escape" : !ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", close);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((o) => !o)}
        className={clsx("flex h-9 items-center gap-1 rounded-[10px] px-3 text-[14px] transition-colors", open ? "bg-control text-ink" : "text-ink-2 hover:bg-control hover:text-ink")}
      >
        Sites
        <ChevronDown className={clsx("size-3.5 transition-transform", open && "rotate-180")} strokeWidth={1.8} />
      </button>
      {open && (
        <motion.div
          role="menu"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: EASE_ENTER }}
          className="absolute right-0 top-11 z-50 w-[320px] rounded-[16px] bg-surface p-1.5 shadow-[0_0_0_1px_var(--tds-line),0_12px_32px_rgb(0_0_0/0.12)]"
        >
          {DOMAINS.filter((d) => d.site).map((d) => (
            <a key={d.slug} role="menuitem" onClick={() => setOpen(false)} href={d.site!.url} target="_blank" rel="noreferrer" className="group flex gap-3 rounded-[12px] p-3 hover:bg-control">
              <span className="mt-1.5 size-2 shrink-0 rounded-full" style={{ background: d.color }} />
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-1 text-[14px] text-ink">
                  {d.site!.name}
                  <ArrowUpRight className="size-3.5 text-ink-3 group-hover:text-ink" strokeWidth={1.8} />
                </span>
                <span className="t-eyebrow block text-ink-3">
                  {d.domain} · {d.site!.host}
                </span>
              </span>
            </a>
          ))}
        </motion.div>
      )}
    </div>
  );
}

/** Global navigation: one horizontal bar. On narrow screens the links move to a swipeable second row. */
export function Gnb() {
  const pathname = usePathname();
  if (pathname === "/login") return null;
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/85 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-[var(--gnb-h)] max-w-[1200px] items-center gap-6 px-4 md:px-6 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <Wordmark />
        <nav aria-label="Main" className="hidden items-center lg:flex">
          <PairLinks id="wide" />
        </nav>
        <div className="ml-auto flex items-center gap-2 lg:justify-self-end">
          <div className="hidden items-center lg:flex">
            <NavLink item={CREDIT} id="wide" />
            <NavLink item={WRITINGS} id="wide" />
            <Divider />
          </div>
          <SitesMenu />
          <ThemeToggle className="hidden sm:flex" />
        </div>
      </div>
      <div className="no-scrollbar relative overflow-x-auto border-t border-line px-2 py-1.5 lg:hidden">
        <CompactNav />
      </div>
    </header>
  );
}
