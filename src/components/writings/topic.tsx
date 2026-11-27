import { DOMAINS } from "@/data/site";

/** Which part of the thesis a writing is about. */
export function Topic({ topic }: { topic: string | null }) {
  if (!topic) return null;
  const d = DOMAINS.find((x) => x.slug === topic);
  return (
    <span className="t-eyebrow inline-flex items-center gap-1.5 text-ink-3">
      <span className="size-1.5 rounded-full" style={{ background: d?.color ?? "var(--tds-ink-3)" }} />
      {d ? d.role : topic}
    </span>
  );
}
