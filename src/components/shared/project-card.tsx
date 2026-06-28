import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data/projects";
import { Badge } from "@/components/ui/badge";
import { SpotlightCard } from "./spotlight-card";
import { ProjectCover } from "./project-cover";

export function ProjectCard({ project, priority }: { project: Project; priority?: boolean }) {
  return (
    <SpotlightCard className="h-full">
      <Link href={`/projects/${project.slug}`} className="flex h-full flex-col">
        <div className="p-3">
          <ProjectCover
            illustration={project.illustration}
            src={project.cover}
            alt={`${project.title} cover`}
            priority={priority}
          />
        </div>
        <div className="flex flex-1 flex-col gap-3 p-5 pt-2">
          <div className="flex items-center justify-between gap-2">
            <Badge variant="brand">{project.category}</Badge>
            <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
          </div>
          <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-foreground">
            {project.title}
          </h3>
          <p className="line-clamp-2 text-sm text-muted-foreground">{project.tagline}</p>
          <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
            {project.tech.map((t) => (
              <Badge key={t} variant="mono">
                {t}
              </Badge>
            ))}
          </div>
          <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-brand-violet">
            View case study
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </SpotlightCard>
  );
}
