import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { Section, SectionHeading } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { ProjectCard } from "@/components/shared/project-card";
import { Button } from "@/components/ui/button";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  return (
    <Section id="featured">
      <SectionHeading
        eyebrow="Selected work"
        title="Featured projects"
        description="A few case studies spanning analytics, SQL and machine learning — each with the problem, the approach and the measurable result."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((p, i) => (
          <Reveal key={p.slug} delay={i} className="h-full">
            <ProjectCard project={p} priority={i === 0} />
          </Reveal>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Button asChild variant="outline" size="lg">
          <Link href="/projects">
            View all projects
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
