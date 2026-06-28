"use client";

import * as React from "react";
import { Search, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { projects as allProjects, projectCategories } from "@/lib/data/projects";
import { ProjectCard } from "@/components/shared/project-card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function ProjectsExplorer() {
  const [category, setCategory] = React.useState<(typeof projectCategories)[number]>("All");
  const [query, setQuery] = React.useState("");

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return allProjects.filter((p) => {
      const matchesCat = category === "All" || p.category === category;
      const matchesQuery =
        q === "" ||
        p.title.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q));
      return matchesCat && matchesQuery;
    });
  }, [category, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={cn(
                "relative rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                category === cat
                  ? "border-transparent text-background"
                  : "border-border text-muted-foreground hover:text-foreground"
              )}
            >
              {category === cat && (
                <motion.span
                  layoutId="cat-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-foreground"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects…"
            className="pl-9 pr-9"
            aria-label="Search projects"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          )}
        </div>
      </div>

      <p className="mt-4 font-mono text-xs text-muted-foreground">
        {filtered.length} {filtered.length === 1 ? "project" : "projects"}
      </p>

      <motion.div layout className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="mt-12 rounded-2xl border border-dashed border-border p-12 text-center text-muted-foreground">
          No projects match your search.
        </div>
      )}
    </div>
  );
}
