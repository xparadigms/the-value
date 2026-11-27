/** Four tiles in a loop: culture, politics, industry, finance. */
export function LogoMark({ className = "size-7" }: { className?: string }) {
  const tiles = [
    { x: 6.5, y: 6.5, c: "#b9a3ff" },
    { x: 14.8, y: 6.5, c: "#4471ed" },
    { x: 14.8, y: 14.8, c: "#13a963" },
    { x: 6.5, y: 14.8, c: "#e06f12" },
  ];
  return (
    <svg viewBox="0 0 28 28" className={className} aria-hidden>
      {tiles.map((t) => (
        <rect key={t.c} x={t.x} y={t.y} width={6.7} height={6.7} rx={1.8} fill={t.c} />
      ))}
    </svg>
  );
}
