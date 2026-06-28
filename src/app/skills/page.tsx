import type { Metadata } from "next";
import { Code2, BarChart3, Brain, Wrench } from "lucide-react";
import { skillGroups } from "@/lib/data/skills";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { SkillBar } from "@/components/skills/skill-bar";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Programming, visualization, machine learning and tooling skills with proficiency levels — Python, SQL, Power BI, Scikit-learn and more.",
};

const iconMap = { code: Code2, chart: BarChart3, brain: Brain, wrench: Wrench } as const;

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title={
          <>
            The <span className="gradient-text">toolkit</span> I build with
          </>
        }
        description="A breakdown of the languages, libraries and tools I use day to day, grouped by where they fit in the data workflow."
      />

      <Section className="py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon];
            return (
              <Reveal key={group.category} delay={i % 2} className="h-full">
                <SpotlightCard className="h-full p-6 md:p-7">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-xl border border-border bg-muted">
                      <Icon className="size-5 text-brand-violet" />
                    </span>
                    <div>
                      <h2 className="text-lg font-semibold">{group.category}</h2>
                      <p className="text-sm text-muted-foreground">{group.blurb}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    {group.skills.map((s) => (
                      <SkillBar key={s.name} name={s.name} level={s.level} />
                    ))}
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </Section>
    </>
  );
}
