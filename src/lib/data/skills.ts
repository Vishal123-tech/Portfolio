export interface Skill {
  name: string;
  level: number; // 0-100, used for the proficiency bar
}

export interface SkillGroup {
  category: string;
  blurb: string;
  icon: "code" | "chart" | "brain" | "wrench";
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages & Databases",
    blurb: "Querying, scripting and modelling data at the source.",
    icon: "code",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 90 },
      { name: "PostgreSQL", level: 82 },
      { name: "MySQL", level: 80 },
      { name: "R", level: 60 },
    ],
  },
  {
    category: "Machine Learning",
    blurb: "Classification, regression and clustering — built, tuned and explained.",
    icon: "brain",
    skills: [
      { name: "Scikit-learn", level: 88 },
      { name: "XGBoost", level: 84 },
      { name: "LightGBM", level: 86 },
      { name: "CatBoost", level: 80 },
      { name: "Optuna", level: 82 },
      { name: "SHAP", level: 78 },
    ],
  },
  {
    category: "Data & Visualization",
    blurb: "Wrangling data and turning it into clear, decision-ready visuals.",
    icon: "chart",
    skills: [
      { name: "Pandas", level: 92 },
      { name: "NumPy", level: 88 },
      { name: "Power BI", level: 88 },
      { name: "Tableau", level: 82 },
      { name: "Matplotlib", level: 85 },
      { name: "Seaborn", level: 85 },
    ],
  },
  {
    category: "Tools & Workflow",
    blurb: "The everyday workbench for shipping reproducible analysis.",
    icon: "wrench",
    skills: [
      { name: "Excel (Power Query)", level: 86 },
      { name: "Jupyter", level: 90 },
      { name: "Git", level: 84 },
      { name: "GitHub", level: 84 },
    ],
  },
];

/** Tech names used by the floating-icon marquee on the hero. */
export const techMarquee = [
  "Python",
  "SQL",
  "Power BI",
  "Tableau",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "XGBoost",
  "LightGBM",
  "Optuna",
  "SHAP",
  "PostgreSQL",
  "Seaborn",
  "Jupyter",
];
