import * as React from "react";
import { Reveal } from "./reveal";
import { Badge } from "@/components/ui/badge";

export interface TimelineItem {
  period: string;
  title: string;
  subtitle?: string;
  description?: string;
  tags?: string[];
}

/** Vertical interactive timeline with a gradient spine. */
export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative ml-3 border-l border-border">
      <span
        aria-hidden
        className="absolute left-0 top-0 h-full w-px bg-[linear-gradient(to_bottom,var(--brand-blue),var(--brand-violet),var(--brand-cyan))] opacity-50"
      />
      {items.map((item, i) => (
        <li key={`${item.title}-${i}`} className="relative ml-6 pb-10 last:pb-0">
          <Reveal delay={i}>
            <span className="absolute -left-[1.92rem] top-1.5 grid size-4 place-items-center">
              <span className="size-2.5 rounded-full bg-brand-violet ring-4 ring-background" />
            </span>
            <div className="group rounded-2xl border border-border bg-card p-5 transition-colors hover:border-brand-violet/30">
              <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
              <h3 className="mt-1 text-base font-semibold">{item.title}</h3>
              {item.subtitle && (
                <p className="text-sm text-brand-violet">{item.subtitle}</p>
              )}
              {item.description && (
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              )}
              {item.tags && item.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <Badge key={t} variant="mono">
                      {t}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
