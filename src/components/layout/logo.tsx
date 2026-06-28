import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Vishal Yadav — home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="relative grid size-9 place-items-center rounded-xl border border-border bg-card">
        <span className="absolute inset-0 rounded-xl bg-[linear-gradient(120deg,var(--brand-blue),var(--brand-violet),var(--brand-cyan))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <svg viewBox="0 0 24 24" className="relative size-5" fill="none" aria-hidden>
          <path
            d="M4 5l5 14 3-8 3 8 5-14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-foreground group-hover:text-white"
          />
        </svg>
      </span>
      <span className="font-mono text-sm font-semibold tracking-tight">
        vishal<span className="text-muted-foreground">.yadav</span>
      </span>
    </Link>
  );
}
