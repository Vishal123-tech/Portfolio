import { Hero } from "@/components/home/hero";
import { Stats } from "@/components/home/stats";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { SkillsPreview } from "@/components/home/skills-preview";
import { CTA } from "@/components/home/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedProjects />
      <SkillsPreview />
      <CTA />
    </>
  );
}
