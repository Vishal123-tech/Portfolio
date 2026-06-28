import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Lightbulb,
  Trophy,
} from "lucide-react";
import { getProject, projects } from "@/lib/data/projects";
import { siteConfig } from "@/lib/site";
import { GithubIcon } from "@/components/icons";
import { Section, SectionHeading } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { GridBackground, GlowBlobs } from "@/components/shared/grid-background";
import { ProjectCover } from "@/components/shared/project-cover";
import { ProjectCard } from "@/components/shared/project-card";
import { Counter } from "@/components/shared/counter";
import { ArchitectureFlow } from "@/components/projects/architecture-flow";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: `${project.title} — ${siteConfig.name}`,
      description: project.tagline,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <GridBackground variant="grid" />
        <GlowBlobs />
        <div className="mx-auto max-w-6xl container-px py-14 md:py-20">
          <Button asChild variant="ghost" size="sm" className="mb-8 -ml-2">
            <Link href="/projects">
              <ArrowLeft className="size-4" /> All projects
            </Link>
          </Button>

          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal className="flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="brand">{project.category}</Badge>
                <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
              </div>
              <h1 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                {project.title}
              </h1>
              <p className="text-balance text-base text-muted-foreground md:text-lg">
                {project.tagline}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <Badge key={t} variant="mono">
                    {t}
                  </Badge>
                ))}
              </div>
              <div className="mt-2 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <Button asChild variant="gradient">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer noopener">
                      <ExternalLink className="size-4" /> Live demo
                    </a>
                  </Button>
                )}
                <Button asChild variant="outline">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer noopener">
                    <GithubIcon className="size-4" /> View code
                  </a>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <ProjectCover
                illustration={project.illustration}
                src={project.cover}
                alt={`${project.title} hero`}
                priority
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Results / metrics */}
      <Section className="py-14 md:py-16">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {project.results.map((r) => (
            <div key={r.label} className="bg-background p-6 text-center">
              <div className="gradient-text text-3xl font-bold tracking-tight md:text-4xl">
                <Counter to={r.value} prefix={r.prefix} suffix={r.suffix} />
              </div>
              <p className="mt-2 text-xs text-muted-foreground">{r.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Overview */}
      <Section className="py-0">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-10">
            <Reveal>
              <h2 className="mb-3 text-2xl font-bold tracking-tight">Overview</h2>
              <p className="text-balance leading-relaxed text-muted-foreground">
                {project.overview}
              </p>
            </Reveal>

            <Reveal>
              <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                <CheckCircle2 className="size-5 text-brand-cyan" /> Features
              </h3>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 rounded-xl border border-border bg-card p-3.5 text-sm">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-violet" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                <Lightbulb className="size-5 text-brand-violet" /> Challenges
              </h3>
              <ul className="flex flex-col gap-2.5">
                {project.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-muted-foreground/50" />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Sidebar: results + screenshots */}
          <div className="flex flex-col gap-8">
            <Reveal>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                  <Trophy className="size-5 text-brand-cyan" /> Results
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.resultNarrative}
                </p>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground">
                  Screenshots
                </h3>
                {project.screenshots.map((s, i) => (
                  <figure key={i} className="overflow-hidden rounded-xl border border-border bg-muted">
                    <div className="relative aspect-[16/9]">
                      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
                      <div className="absolute inset-0 grid place-items-center p-3 text-center">
                        <span className="font-mono text-xs text-muted-foreground">{s.caption}</span>
                      </div>
                    </div>
                  </figure>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Architecture */}
      <Section>
        <SectionHeading
          eyebrow="How it works"
          title="Architecture"
          description="The end-to-end flow from raw data to a shipped result."
        />
        <ArchitectureFlow steps={project.architecture} />
      </Section>

      {/* Related */}
      <Section className="pt-0">
        <SectionHeading align="left" eyebrow="Keep exploring" title="Other projects" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {related.map((p, i) => (
            <Reveal key={p.slug} delay={i} className="h-full">
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
