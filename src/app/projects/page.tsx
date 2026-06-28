import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { ProjectsExplorer } from "@/components/projects/projects-explorer";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Data analytics and machine learning case studies — customer segmentation, SQL analysis, layoff-risk prediction and Power BI dashboards.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title={
          <>
            Case studies & <span className="gradient-text">experiments</span>
          </>
        }
        description="Real projects with the problem, the approach and the measurable result. Filter by category or search by technology."
      />
      <Section className="py-16 md:py-20">
        <ProjectsExplorer />
      </Section>
    </>
  );
}
