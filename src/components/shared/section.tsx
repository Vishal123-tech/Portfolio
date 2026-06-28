import * as React from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
}

export function Section({ children, className, id, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("mx-auto w-full max-w-6xl container-px py-20 md:py-28", className)}
      {...props}
    >
      {children}
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-12 flex flex-col gap-4 md:mb-16",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 font-mono text-xs text-muted-foreground">
          <span className="size-1.5 rounded-full bg-brand-violet" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-balance text-base text-muted-foreground md:text-lg",
            align === "center" ? "max-w-2xl" : "max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
