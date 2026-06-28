"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

/**
 * Signature Concept-B hover: a radial spotlight that follows the cursor,
 * plus a subtle gradient ring. Pointer tracking is CSS-variable driven
 * so it stays cheap (no React re-renders on mouse move).
 */
export function SpotlightCard({ children, className, as, ...props }: SpotlightCardProps) {
  const Comp = (as ?? "div") as React.ElementType;
  const ref = React.useRef<HTMLDivElement>(null);

  const handleMove = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <Comp
      ref={ref}
      onMouseMove={handleMove}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300",
        "hover:border-brand-violet/30",
        className
      )}
      {...props}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), var(--spotlight), transparent 60%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </Comp>
  );
}
