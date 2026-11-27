import Link from "next/link";
import type { ReactNode } from "react";

export type FlowNode = {
  x: number;
  y: number;
  w?: number;
  h?: number;
  eye: string;
  title: string;
  sub: string;
  variant?: "muted" | "filled";
  href?: string;
};
export type FlowEdge = {
  d: string;
  label?: string;
  /** Label anchor: center x and text baseline y. */
  lx?: number;
  ly?: number;
  kind?: "accent" | "good" | "crit";
};
export type FlowGroup = { x: number; y: number; w: number; h: number; label: string };
export type FlowChart = {
  id: string;
  eyebrow: string;
  viewBox: string;
  aria: string;
  caption: string;
  nodes: FlowNode[];
  edges: FlowEdge[];
  groups?: FlowGroup[];
};

const labelWidth = (s: string) => s.length * 7.2 + 16;

function NodeBox({ n }: { n: FlowNode }) {
  const w = n.w ?? 160;
  const h = n.h ?? 82;
  const cx = n.x + w / 2;
  const cls = `node ${n.variant ?? ""}`;
  const body = (
    <>
      <rect x={n.x} y={n.y} width={w} height={h} rx={8} />
      <text className="n-eye" x={cx} y={n.y + 23} textAnchor="middle">
        {n.eye}
      </text>
      <text className="n-title" x={cx} y={n.y + 47} textAnchor="middle">
        {n.title}
      </text>
      <text className="n-sub" x={cx} y={n.y + 66} textAnchor="middle">
        {n.sub}
      </text>
    </>
  );
  if (n.href)
    return (
      <Link href={n.href} className={cls} aria-label={n.title}>
        {body}
      </Link>
    );
  return <g className={cls}>{body}</g>;
}

/** A dark flow diagram: boxes, dashed "marching ants" edges with pill labels, optional dashed groups. */
export function Flow({ chart, children }: { chart: FlowChart; children?: ReactNode }) {
  const m = (k = "") => `${chart.id}-a${k}`;
  return (
    <figure className="flow my-10 rounded-[24px] p-4 md:p-6">
      <div className="t-eyebrow" style={{ color: "var(--flow-eyebrow)" }}>
        {chart.eyebrow}
      </div>
      <div className="no-scrollbar mt-3 overflow-x-auto">
        <svg viewBox={chart.viewBox} role="img" aria-label={chart.aria}>
          <defs>
            {(["", "good", "crit"] as const).map((k) => (
              <marker key={k} id={m(k)} viewBox="0 0 10 10" refX={8} refY={5} markerWidth={8} markerHeight={8} orient="auto">
                <path className={`head ${k}`} d="M2 1 L8 5 L2 9" />
              </marker>
            ))}
          </defs>
          {chart.groups?.map((g) => (
            <g key={g.label}>
              <rect className="group" x={g.x} y={g.y} width={g.w} height={g.h} rx={12} />
              <text className="g-eye" x={g.x + g.w / 2} y={g.y - 14} textAnchor="middle">
                {g.label}
              </text>
            </g>
          ))}
          {chart.nodes.map((n) => (
            <NodeBox key={n.title + n.x} n={n} />
          ))}
          {chart.edges.map((e, i) => {
            const k = e.kind === "good" || e.kind === "crit" ? e.kind : "";
            return (
              <g key={i}>
                <path className={`edge ${e.kind ?? ""}`} d={e.d} markerEnd={`url(#${m(k)})`} />
                {e.label && e.lx != null && e.ly != null && (
                  <g className={`lab ${k}`}>
                    <rect x={e.lx - labelWidth(e.label) / 2} y={e.ly - 14} width={labelWidth(e.label)} height={20} rx={10} />
                    <text x={e.lx} y={e.ly} textAnchor="middle">
                      {e.label}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </div>
      <figcaption className="t-b3 mt-4 border-t pt-3 text-center" style={{ color: "var(--flow-caption)", borderColor: "#ffffff17" }}>
        {chart.caption}
        {children}
      </figcaption>
    </figure>
  );
}
