import Link from "next/link";
import { DOMAINS } from "@/data/site";

export function CompareTable() {
  return (
    <div className="no-scrollbar mt-3 overflow-x-auto">
      <table className="w-full min-w-[680px] border-collapse">
        <thead>
          <tr>
            {["Domain", "Role", "Question it answers", "Form of trust", "Sign of failure"].map((h) => (
              <th key={h} className="t-eyebrow border-b border-line py-2.5 pr-3 text-left text-ink-3">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="t-b2">
          {DOMAINS.map((d, i) => (
            <tr key={d.slug} className={i < DOMAINS.length - 1 ? "border-b border-line" : ""}>
              <td className="py-3.5 pr-3 align-top">
                <Link href={`/${d.slug}`} className="inline-flex items-center gap-2 text-ink hover:text-blue">
                  <span className="size-2 rounded-full" style={{ background: d.color }} />
                  {d.domain}
                </Link>
              </td>
              <td className="py-3.5 pr-3 align-top text-blue">{d.role}</td>
              <td className="py-3.5 pr-3 align-top text-ink-2">{d.question}</td>
              <td className="py-3.5 pr-3 align-top text-ink-2">{d.trust}</td>
              <td className="py-3.5 pr-3 align-top text-ink-2">{d.failure}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
