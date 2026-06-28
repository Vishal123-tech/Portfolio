import { cn } from "@/lib/utils";

/** Decorative dotted/grid backdrop with a soft radial fade — the Concept-B signature. */
export function GridBackground({
  variant = "grid",
  className,
}: {
  variant?: "grid" | "dots";
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 mask-fade",
        variant === "grid" ? "bg-grid" : "bg-dots",
        className
      )}
    />
  );
}

/** Animated brand-gradient blobs used behind hero/section content. */
export function GlowBlobs({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      <div className="absolute -left-24 top-0 size-[28rem] rounded-full bg-brand-blue/20 blur-[120px] animate-aurora" />
      <div className="absolute right-0 top-24 size-[24rem] rounded-full bg-brand-violet/20 blur-[120px] animate-aurora [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/3 size-[22rem] rounded-full bg-brand-cyan/15 blur-[120px] animate-aurora [animation-delay:-12s]" />
    </div>
  );
}
