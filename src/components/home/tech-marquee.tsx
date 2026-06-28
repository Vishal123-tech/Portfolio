import { techMarquee } from "@/lib/data/skills";

/** Infinite, reduced-motion-friendly marquee of technology tags. */
export function TechMarquee() {
  const row = [...techMarquee, ...techMarquee];
  return (
    <div className="relative w-full overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
      <div className="flex w-max animate-marquee gap-3">
        {row.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-xs text-muted-foreground"
          >
            <span className="size-1.5 rounded-full bg-[linear-gradient(120deg,var(--brand-blue),var(--brand-cyan))]" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
