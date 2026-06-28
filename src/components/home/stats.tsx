import { Counter } from "@/components/shared/counter";
import { Reveal } from "@/components/shared/reveal";

const stats = [
  { label: "End-to-end projects", to: 5, suffix: "+" },
  { label: "Best model accuracy", to: 90.07, decimals: 2, suffix: "%" },
  { label: "Job records analysed", to: 9000, suffix: "+" },
  { label: "Industry certifications", to: 5 },
];

export function Stats() {
  return (
    <section className="mx-auto w-full max-w-6xl container-px">
      <Reveal className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-background p-6 text-center md:p-8">
            <div className="gradient-text text-3xl font-bold tracking-tight md:text-4xl">
              <Counter to={s.to} suffix={s.suffix} decimals={s.decimals} />
            </div>
            <p className="mt-2 text-xs text-muted-foreground md:text-sm">{s.label}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
