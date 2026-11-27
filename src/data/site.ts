export type Domain = {
  slug: "culture" | "politics" | "industry" | "finance";
  idx: string;
  domain: string;
  role: string;
  verb: string;
  short: string;
  question: string;
  trust: string;
  failure: string;
  color: string;
  /** The companion site that goes deep on this domain. */
  site?: { name: string; url: string; host: string; blurb: string };
};

export const DOMAINS: Domain[] = [
  {
    slug: "culture",
    idx: "01",
    domain: "Culture",
    role: "Value Definition",
    verb: "Defines value",
    short: "Wants and needs",
    question: "What do people want and need?",
    trust: "Shared beliefs",
    failure: "Definitions fragment",
    color: "var(--color-purple)",
  },
  {
    slug: "politics",
    idx: "02",
    domain: "Politics",
    role: "Value System",
    verb: "Ranks value",
    short: "Priorities and rules",
    question: "Which values come first, and under which rules?",
    trust: "Support and credibility",
    failure: "Support is withdrawn",
    color: "var(--color-blue)",
    site: {
      name: "The Value System",
      url: "https://politics.heechangkang.org/",
      host: "politics.heechangkang.org",
      blurb: "Every country's political system: who holds power, how coalitions form, and what each state promises to deliver.",
    },
  },
  {
    slug: "industry",
    idx: "03",
    domain: "Industry",
    role: "Value Creation",
    verb: "Creates value",
    short: "Rising productivity",
    question: "How is more value produced?",
    trust: "Reliable output",
    failure: "Productivity stalls",
    color: "var(--color-green)",
    site: {
      name: "The Value Creation",
      url: "https://value-creation.heechangkang.org/",
      host: "value-creation.heechangkang.org",
      blurb: "The industries that make up the world's listed economy, and the startups and investors building what comes next.",
    },
  },
  {
    slug: "finance",
    idx: "04",
    domain: "Finance",
    role: "Value Exchange",
    verb: "Moves value",
    short: "Issue, move, regulate",
    question: "How does value move between people and across time?",
    trust: "Credit",
    failure: "Credit contracts",
    color: "var(--color-orange)",
    site: {
      name: "The Value Exchange",
      url: "https://value-exchange.heechangkang.org/institutions",
      host: "value-exchange.heechangkang.org",
      blurb: "An interactive map of the financial system by function: how value is issued, how it flows, and how it is regulated.",
    },
  },
];

export const domain = (slug: Domain["slug"]) => DOMAINS.find((d) => d.slug === slug)!;

export type NavItem = { href: string; label: string; sub?: string; color?: string };

/** The global nav: two pairs of domains, named by the role each plays with value. */
export const NAV_PAIRS: { label: string; items: NavItem[] }[] = [
  {
    label: "Define and rank value",
    items: [
      { href: "/culture", label: "Definition", sub: "Culture", color: "var(--color-purple)" },
      { href: "/politics", label: "System", sub: "Politics", color: "var(--color-blue)" },
    ],
  },
  {
    label: "Create and move value",
    items: [
      { href: "/industry", label: "Creation", sub: "Industry", color: "var(--color-green)" },
      { href: "/finance", label: "Exchange", sub: "Finance", color: "var(--color-orange)" },
    ],
  },
];

/** Credit sits apart from the pairs: the mechanism common to politics and finance. */
export const CREDIT: NavItem = { href: "/credit", label: "Credit", sub: "Common Mechanism" };

/** Every page in reading order (the landing page carries the full system). */
export const PAGES: NavItem[] = [{ href: "/", label: "Overview", sub: "The Full System" }, ...NAV_PAIRS.flatMap((p) => p.items), CREDIT];

/** Previous / next pages in reading order. */
export function neighbors(href: string) {
  const i = PAGES.findIndex((n) => n.href === href);
  return { prev: PAGES[i - 1], next: PAGES[i + 1] };
}
