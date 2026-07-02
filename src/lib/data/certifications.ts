export interface Certification {
  title: string;
  issuer: "IBM SkillsBuild" | "Google" | "Deloitte" | "HackerRank";
  date: string; // human-readable
  sortKey: number; // for ordering, higher = more recent
  credentialUrl?: string;
  skills: string[];
}

const items: Certification[] = [
  {
    title: "SQL (Advanced, Intermediate & Basic)",
    issuer: "HackerRank",
    date: "Apr 2026",
    sortKey: 202610,
    skills: ["SQL", "Joins", "Aggregation", "Subqueries"],
  },
  {
    title: "Machine Learning for Data Science Projects",
    issuer: "IBM SkillsBuild",
    date: "Mar 2026",
    sortKey: 202606,
    skills: ["Machine Learning", "Python", "Modeling"],
  },
  {
    title: "Data Classification",
    issuer: "IBM SkillsBuild",
    date: "Mar 2026",
    sortKey: 202605,
    skills: ["Classification", "ML"],
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Mar 2026",
    sortKey: 202604,
    skills: ["AI", "Foundations"],
  },
  {
    title: "Google Analytics Certification",
    issuer: "Google",
    date: "Jan 2026",
    sortKey: 202601,
    skills: ["Analytics", "Reporting"],
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    date: "Jul 2025",
    sortKey: 202507,
    skills: ["Tableau", "ETL", "Dashboards"],
  },
];

export const certifications = [...items].sort((a, b) => b.sortKey - a.sortKey);
