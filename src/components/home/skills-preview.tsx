import Link from "next/link";
import { ArrowRight, Code2, BarChart3, Brain, Wrench } from "lucide-react";
import { skillGroups } from "@/lib/data/skills";
import { Section, SectionHeading } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const iconMap = { code: Code2, chart: BarChart3, brain: Brain, wrench: Wrench } as const;

export function SkillsPreview() {
  return (
    <Section id="skills-preview">
      <SectionHeading
        eyebrow="Toolkit"
        title="Skills & technologies"
        description="The stack I reach for to take a question from raw data to a decision-ready answer."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => {
          const Icon = iconMap[group.icon];
          return (
            <Reveal key={group.category} delay={i} className="h-full">
              <SpotlightCard className="h-full p-6">
                <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl border border-border bg-muted">
                  <Icon className="size-5 text-brand-violet" />
                </div>
                <h3 className="text-base font-semibold">{group.category}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{group.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {group.skills.map((s) => (
                    <Badge key={s.name} variant="mono">
                      {s.name}
                    </Badge>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>
      <div className="mt-12 flex justify-center">
        <Button asChild variant="ghost" size="lg">
          <Link href="/skills">
            Explore the full toolkit
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
