import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";

interface Step {
  step: string;
  detail: string;
}

/** Horizontal (stacks on mobile) architecture flow diagram. */
export function ArchitectureFlow({ steps }: { steps: Step[] }) {
  return (
    <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
      {steps.map((s, i) => (
        <Reveal key={s.step} delay={i} className="flex flex-1 items-center gap-3 md:flex-col">
          <div className="relative flex-1 overflow-hidden rounded-2xl border border-border bg-card p-5 text-center md:w-full">
            <span className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--brand-violet),transparent)]" />
            <span className="font-mono text-xs text-brand-violet">0{i + 1}</span>
            <h4 className="mt-1 font-semibold">{s.step}</h4>
            <p className="mt-1 text-sm text-muted-foreground">{s.detail}</p>
          </div>
          {i < steps.length - 1 && (
            <ArrowRight className="size-5 shrink-0 rotate-90 text-muted-foreground md:rotate-0" />
          )}
        </Reveal>
      ))}
    </div>
  );
}
