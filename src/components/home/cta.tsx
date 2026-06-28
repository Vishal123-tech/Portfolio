import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { GridBackground } from "@/components/shared/grid-background";

export function CTA() {
  return (
    <Section>
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center md:px-12 md:py-20">
          <GridBackground variant="dots" />
          <div className="absolute inset-x-0 top-0 mx-auto h-px w-2/3 bg-[linear-gradient(90deg,transparent,var(--brand-violet),transparent)]" />
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Let&rsquo;s turn your data into <span className="gradient-text">decisions</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-muted-foreground">
            Open to Data Analyst and Data Science opportunities, freelance analytics, and collaborations. I usually reply within a day.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild variant="gradient" size="lg">
              <Link href="/contact">
                <Mail className="size-4" />
                Get in touch
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">
                Browse projects
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
