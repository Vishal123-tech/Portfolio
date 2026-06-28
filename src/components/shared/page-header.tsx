import { Reveal } from "./reveal";
import { GridBackground, GlowBlobs } from "./grid-background";

interface PageHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <GridBackground variant="grid" />
      <GlowBlobs />
      <div className="mx-auto max-w-6xl container-px py-16 md:py-24">
        <Reveal className="flex flex-col gap-4">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-brand-violet" />
            {eyebrow}
          </span>
          <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="max-w-2xl text-balance text-base text-muted-foreground md:text-lg">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
