import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Vishal Yadav — home"
      className={cn("group inline-flex items-center", className)}
    >
      <span className="font-serif text-xl italic tracking-tight text-foreground transition-opacity group-hover:opacity-65">Vishal Yadav</span>
    </Link>
  );
}
