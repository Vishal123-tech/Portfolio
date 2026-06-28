import type { Metadata } from "next";
import Link from "next/link";
import { Download, GraduationCap, Target, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { skillGroups } from "@/lib/data/skills";
import { PageHeader } from "@/components/shared/page-header";
import { Section, SectionHeading } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { Timeline, type TimelineItem } from "@/components/shared/timeline";
import { ProfilePhoto } from "@/components/shared/profile-photo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Data Analyst and Data Science student focused on SQL, Python, machine learning and Power BI. Education, skills and journey.",
};

const journey: TimelineItem[] = [
  {
    period: "Mar 2026",
    title: "IBM SkillsBuild & Google Certifications",
    subtitle: "ML, Data Classification, AI Fundamentals, Google Analytics",
    description:
      "Earned four industry certifications across machine learning, AI and analytics — reflecting consistent upskilling.",
    tags: ["IBM SkillsBuild", "Google", "ML"],
  },
  {
    period: "2025 — 2026",
    title: "End-to-end Data Science Projects",
    subtitle: "Layoff-risk analysis · Segmentation · Diabetes · Insurance",
    description:
      "Built four end-to-end projects spanning EDA, clustering, classification (90.07% accuracy) and regression, all published on GitHub.",
    tags: ["Python", "LightGBM", "Power BI"],
  },
  {
    period: "Jul 2025",
    title: "Data Analytics Virtual Intern",
    subtitle: "Deloitte (via Forage)",
    description:
      "Built ETL processes in Excel & Tableau and designed interactive dashboards communicating KPIs to stakeholder audiences.",
    tags: ["Tableau", "ETL", "Dashboards"],
  },
];

const education: TimelineItem[] = [
  {
    period: "Mar 2023 — May 2027",
    title: "B.E. — Electrical, Electronics & Communications Engineering",
    subtitle: "Shree L. R. Tiwari College of Engineering, Mumbai",
    description:
      "Final-year project: a Retail Customer Analytics system using Python, SQL and Power BI to analyse customer behaviour and build interactive dashboards.",
    tags: ["Python", "SQL", "Power BI"],
  },
  {
    period: "Jun 2020 — May 2022",
    title: "Class XII — Science (HSC)",
    subtitle: "Shri T. P. Bhatia Junior College of Science",
    description: "Higher Secondary Certificate in the Science stream.",
  },
  {
    period: "Jun 2019 — May 2020",
    title: "Class X (SSC)",
    subtitle: "Sardar Vallabhbhai Patel Vividhlaxi Vidhyalaya (SVPVV)",
    description: "Secondary School Certificate.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About me"
        title={
          <>
            Turning data into <span className="gradient-text">decisions</span>.
          </>
        }
        description="I'm Vishal Yadav — a Data Science & Analytics fresher from Mumbai with hands-on experience in end-to-end ML pipelines, predictive modeling, EDA, ETL and BI reporting."
      />

      {/* Intro: photo + objective */}
      <Section className="py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[320px_1fr] md:gap-14">
          <Reveal>
            <div className="md:sticky md:top-24">
              <ProfilePhoto />
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4" /> Mumbai, India · Open to opportunities
              </div>
              <Button asChild variant="gradient" className="mt-4 w-full">
                <a href={siteConfig.resumeUrl} download={siteConfig.resumeFileName}>
                  <Download className="size-4" /> Download Resume
                </a>
              </Button>
            </div>
          </Reveal>

          <div className="flex flex-col gap-8">
            <Reveal>
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="mb-3 inline-flex items-center gap-2 text-brand-violet">
                  <Target className="size-5" />
                  <span className="font-mono text-xs uppercase tracking-wider">Career objective</span>
                </div>
                <p className="text-balance text-lg leading-relaxed">
                  Passionate about transforming large datasets into actionable business insights
                  through data-driven solutions and compelling visualizations — combining strong
                  Python and SQL fundamentals with predictive modeling and clear, stakeholder-ready
                  storytelling.
                </p>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="mb-4 inline-flex items-center gap-2 text-brand-violet">
                  <GraduationCap className="size-5" />
                  <span className="font-mono text-xs uppercase tracking-wider">Education</span>
                </div>
                <Timeline items={education} />
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Core skills
                </p>
                <div className="flex flex-col gap-4">
                  {skillGroups.map((g) => (
                    <div key={g.category}>
                      <p className="mb-2 text-sm font-medium">{g.category}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {g.skills.map((s) => (
                          <Badge key={s.name} variant="mono">
                            {s.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <Button asChild variant="ghost" size="sm" className="mt-5">
                  <Link href="/skills">See proficiency breakdown →</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Journey timeline */}
      <Section className="pt-0">
        <SectionHeading
          align="left"
          eyebrow="The journey"
          title="How I got here"
          description="A short timeline of study, projects and certifications."
        />
        <Timeline items={journey} />
      </Section>
    </>
  );
}
