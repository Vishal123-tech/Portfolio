import { Hero } from "@/components/home/hero";
import { Stats } from "@/components/home/stats";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { CTA } from "@/components/home/cta";
import { PortfolioAbout, PortfolioContact, PortfolioEducation, PortfolioExperience, PortfolioSkills } from "@/components/home/portfolio-sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PortfolioAbout />
      <PortfolioSkills />
      <PortfolioExperience />
      <Stats />
      <FeaturedProjects />
      <PortfolioEducation />
      <PortfolioContact />
      <CTA />
    </>
  );
}
