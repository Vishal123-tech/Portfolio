import { Fragment } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";

interface Step {
  step: string;
  detail: string;
}

/** Horizontal (stacks on mobile) architecture flow diagram. Cards stay equal-height and aligned. */
export function ArchitectureFlow({ steps }: { steps: Step[] }) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-stretch">
      {steps.map((s, i) => (
        <Fragment key={s.step}>
          <Reveal delay={i} className="flex-1">
            <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-card p-5 text-center">
              <span className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--brand-violet),transparent)]" />
              <span className="font-mono text-xs text-brand-violet">0{i + 1}</span>
              <h4 className="mt-1 font-semibold">{s.step}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{s.detail}</p>
            </div>
          </Reveal>
          {i < steps.length - 1 && (
            <div className="flex shrink-0 items-center justify-center text-muted-foreground" aria-hidden>
              <ArrowRight className="size-5 rotate-90 md:rotate-0" />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
