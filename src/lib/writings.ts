import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

// Writings are Markdown files in content/writings/<slug>.md with front matter:
//   title: Notes on Taste
//   date: 2026-11-20
//   dek: One-sentence summary shown in lists.
//   topic: politics                   (optional: culture | politics | industry | finance | credit)
//   cover: /writings/notes.jpg        (optional: any image in /public, or a full URL)
//   featured: true                    (the newest featured post is shown on top)
//   draft: true                       (hidden in production)

export type Heading = { id: string; text: string; level: 2 | 3 };
export type Post = {
  slug: string;
  title: string;
  date: string;
  dek: string;
  cover: string | null;
  featured: boolean;
  draft: boolean;
  topic: string | null;
  body: string;
  headings: Heading[];
  minutes: number;
};

const DIR = path.join(process.cwd(), "content/writings");

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[`*_~[\]()]/g, "")
    .replace(/[^a-z0-9가-힣]+/g, "-")
    .replace(/^-|-$/g, "");

function read(file: string): Post {
  const raw = fs.readFileSync(path.join(DIR, file), "utf8");
  const { data, content } = matter(raw);
  const headings: Heading[] = [];
  for (const line of content.split("\n")) {
    const m = /^(##|###)\s+(.+?)\s*$/.exec(line);
    if (m) headings.push({ level: m[1].length as 2 | 3, text: m[2], id: slugify(m[2]) });
  }
  const words = content.split(/\s+/).filter(Boolean).length;
  return {
    slug: file.replace(/\.md$/, ""),
    title: String(data.title ?? file),
    date: data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date ?? ""),
    dek: String(data.dek ?? ""),
    cover: data.cover ? String(data.cover) : null,
    featured: Boolean(data.featured),
    draft: Boolean(data.draft),
    topic: data.topic ? String(data.topic).toLowerCase() : null,
    body: content,
    headings,
    minutes: Math.max(1, Math.round(words / 230)),
  };
}

/** All published posts, newest first. Drafts show only in development. */
export function getPosts(): Post[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".md"))
    .map(read)
    .filter((p) => !p.draft || process.env.NODE_ENV !== "production")
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | null {
  return getPosts().find((p) => p.slug === slug) ?? null;
}

export const formatDate = (d: string) =>
  d ? new Date(d + "T00:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }) : "";
