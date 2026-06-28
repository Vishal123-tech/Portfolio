import { BrandDefs } from "./gradients";
import { cn } from "@/lib/utils";

const frame = "h-full w-full";
const cardFill = "fill-card";
const lineStroke = "stroke-border";

/** Faux Power BI dashboard: KPI cards, bar chart, donut. */
export function PowerBIArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 260" className={cn(frame, className)} role="img" aria-label="Power BI dashboard illustration">
      <BrandDefs id="pbi" />
      <rect width="400" height="260" rx="14" className="fill-muted" />
      {/* KPI row */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${16 + i * 124}, 16)`}>
          <rect width="112" height="46" rx="8" className={cardFill} />
          <rect x="12" y="12" width="34" height="6" rx="3" className="fill-muted-foreground/40" />
          <rect x="12" y="24" width="58" height="12" rx="4" fill="url(#pbi-grad)" />
        </g>
      ))}
      {/* Bar chart */}
      <g transform="translate(16, 78)">
        <rect width="232" height="166" rx="10" className={cardFill} />
        {[40, 90, 60, 120, 80, 140, 100].map((h, i) => (
          <rect key={i} x={18 + i * 30} y={150 - h} width="16" height={h} rx="4" fill="url(#pbi-grad-v)" />
        ))}
        <line x1="12" y1="150" x2="220" y2="150" className={lineStroke} strokeWidth="1" />
      </g>
      {/* Donut */}
      <g transform="translate(264, 78)">
        <rect width="120" height="166" rx="10" className={cardFill} />
        <circle cx="60" cy="74" r="40" fill="none" className="stroke-muted" strokeWidth="16" />
        <circle
          cx="60"
          cy="74"
          r="40"
          fill="none"
          stroke="url(#pbi-grad)"
          strokeWidth="16"
          strokeDasharray="180 251"
          strokeLinecap="round"
          transform="rotate(-90 60 74)"
        />
        <rect x="24" y="132" width="72" height="6" rx="3" className="fill-muted-foreground/30" />
      </g>
    </svg>
  );
}

/** SQL / analytics: query window + line chart on a grid. */
export function SQLArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 260" className={cn(frame, className)} role="img" aria-label="SQL analytics illustration">
      <BrandDefs id="sql" />
      <rect width="400" height="260" rx="14" className="fill-muted" />
      {/* code window */}
      <g transform="translate(16, 16)">
        <rect width="368" height="120" rx="10" className={cardFill} />
        <circle cx="18" cy="18" r="4" className="fill-muted-foreground/40" />
        <circle cx="32" cy="18" r="4" className="fill-muted-foreground/40" />
        <circle cx="46" cy="18" r="4" className="fill-muted-foreground/40" />
        {[
          [60, "url(#sql-grad)"],
          [44, "currentColor"],
          [44, "currentColor"],
          [60, "url(#sql-grad)"],
          [44, "currentColor"],
        ].map(([w, fill], i) => (
          <rect key={i} x={18 + (i === 1 || i === 2 || i === 4 ? 20 : 0)} y={40 + i * 15} width={w as number} height="7" rx="3.5" fill={fill as string} className={fill === "currentColor" ? "text-muted-foreground/30" : ""} />
        ))}
      </g>
      {/* line chart */}
      <g transform="translate(16, 148)">
        <rect width="368" height="96" rx="10" className={cardFill} />
        {[1, 2, 3].map((i) => (
          <line key={i} x1="12" y1={24 * i} x2="356" y2={24 * i} className={lineStroke} strokeWidth="1" strokeDasharray="3 5" />
        ))}
        <path
          d="M16 70 L70 50 L124 58 L178 32 L232 44 L286 20 L340 28"
          fill="none"
          stroke="url(#sql-grad)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M16 70 L70 50 L124 58 L178 32 L232 44 L286 20 L340 28 L340 84 L16 84 Z" fill="url(#sql-fade)" />
      </g>
    </svg>
  );
}

/** Machine learning: scatter points with a decision boundary. */
export function MLArt({ className }: { className?: string }) {
  const points = [
    [60, 180, 0], [90, 200, 0], [70, 150, 0], [110, 175, 0], [85, 215, 0], [130, 200, 0],
    [300, 70, 1], [270, 95, 1], [320, 110, 1], [290, 60, 1], [330, 85, 1], [255, 70, 1],
    [180, 130, 2], [210, 150, 2], [195, 110, 2], [230, 125, 2], [160, 150, 2],
  ];
  const colors = ["var(--brand-blue)", "var(--brand-cyan)", "var(--brand-violet)"];
  return (
    <svg viewBox="0 0 400 260" className={cn(frame, className)} role="img" aria-label="Machine learning illustration">
      <BrandDefs id="ml" />
      <rect width="400" height="260" rx="14" className="fill-muted" />
      <g transform="translate(16,16)">
        <rect width="368" height="228" rx="10" className={cardFill} />
        {[1, 2, 3, 4].map((i) => (
          <line key={`h${i}`} x1="20" y1={44 * i} x2="348" y2={44 * i} className={lineStroke} strokeWidth="1" strokeDasharray="2 6" />
        ))}
        {/* decision boundary */}
        <path d="M40 210 C150 150, 200 120, 340 30" fill="none" stroke="url(#ml-grad)" strokeWidth="2.5" strokeDasharray="6 6" />
        {points.map(([x, y, c], i) => (
          <circle key={i} cx={x} cy={y} r="6" fill={colors[c as number]} opacity="0.85" />
        ))}
      </g>
    </svg>
  );
}

/** Generic data-science composite used as a flexible cover. */
export function DashboardArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 260" className={cn(frame, className)} role="img" aria-label="Data dashboard illustration">
      <BrandDefs id="dash" />
      <rect width="400" height="260" rx="14" className="fill-muted" />
      <g transform="translate(16,16)">
        <rect width="220" height="110" rx="10" className={cardFill} />
        {[60, 100, 80, 130, 95, 150].map((h, i) => (
          <rect key={i} x={16 + i * 33} y={96 - h * 0.55} width="18" height={h * 0.55} rx="4" fill="url(#dash-grad-v)" />
        ))}
      </g>
      <g transform="translate(248,16)">
        <rect width="136" height="110" rx="10" className={cardFill} />
        <circle cx="68" cy="55" r="34" fill="none" className="stroke-muted" strokeWidth="14" />
        <circle cx="68" cy="55" r="34" fill="none" stroke="url(#dash-grad)" strokeWidth="14" strokeDasharray="120 214" strokeLinecap="round" transform="rotate(-90 68 55)" />
      </g>
      <g transform="translate(16,142)">
        <rect width="368" height="102" rx="10" className={cardFill} />
        <path d="M16 70 L70 48 L124 60 L178 34 L232 50 L286 24 L340 36" fill="none" stroke="url(#dash-grad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 70 L70 48 L124 60 L178 34 L232 50 L286 24 L340 36 L340 90 L16 90Z" fill="url(#dash-fade)" />
      </g>
    </svg>
  );
}

export const illustrationMap = {
  powerbi: PowerBIArt,
  sql: SQLArt,
  ml: MLArt,
  dashboard: DashboardArt,
} as const;

export type IllustrationKey = keyof typeof illustrationMap;
