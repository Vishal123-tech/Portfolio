import type { Metadata } from "next";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/lib/data/certifications";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Professional certifications from IBM, Google, Microsoft, LinkedIn Learning and Kaggle in data science, analytics and machine learning.",
};

const issuerColor: Record<string, string> = {
  "IBM SkillsBuild": "from-blue-500 to-blue-700",
  Google: "from-emerald-500 to-cyan-500",
  Deloitte: "from-emerald-600 to-teal-500",
  HackerRank: "from-green-500 to-emerald-600",
};

export default function CertificationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Certifications"
        title={
          <>
            Verified <span className="gradient-text">credentials</span>
          </>
        }
        description="Industry certifications that back up the skills — across data science, analytics, Power BI and machine learning."
      />

      <Section className="py-16 md:py-20">
        <ol className="relative mx-auto max-w-3xl border-l border-border">
          <span
            aria-hidden
            className="absolute left-0 top-0 h-full w-px bg-[linear-gradient(to_bottom,var(--brand-blue),var(--brand-violet),var(--brand-cyan))] opacity-50"
          />
          {certifications.map((cert, i) => (
            <li key={`${cert.title}-${i}`} className="relative ml-6 pb-10 last:pb-0 md:ml-10">
              <Reveal delay={i}>
                <span className="absolute -left-[1.92rem] top-5 grid size-4 place-items-center md:-left-[2.92rem]">
                  <span className="size-2.5 rounded-full bg-brand-violet ring-4 ring-background" />
                </span>
                <div className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-brand-violet/30 sm:flex-row sm:items-center">
                  <div
                    className={`grid size-14 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${
                      issuerColor[cert.issuer] ?? "from-brand-blue to-brand-cyan"
                    } text-white`}
                  >
                    <Award className="size-7" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="brand">{cert.issuer}</Badge>
                      <span className="font-mono text-xs text-muted-foreground">{cert.date}</span>
                    </div>
                    <h2 className="mt-1.5 text-base font-semibold">{cert.title}</h2>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {cert.skills.map((s) => (
                        <Badge key={s} variant="mono">
                          {s}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 self-start rounded-lg border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-brand-violet/40 hover:text-foreground sm:self-center"
                    >
                      Verify
                      <ExternalLink className="size-3.5" />
                    </a>
                  )}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
