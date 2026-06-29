export type ProjectCategory = "Data Analysis" | "Machine Learning" | "Dashboard" | "SQL";

export interface ProjectStat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  year: string;
  featured: boolean;
  /** Drop-in image slot — file lives in /public/images/projects. Falls back to SVG cover. */
  cover?: string;
  tech: string[];
  /** Which built-in SVG illustration to render as the hero. */
  illustration: "powerbi" | "sql" | "ml" | "dashboard";
  liveUrl?: string;
  githubUrl: string;
  overview: string;
  features: string[];
  challenges: string[];
  results: ProjectStat[];
  resultNarrative: string;
  /** Architecture steps rendered as a flow diagram. */
  architecture: { step: string; detail: string }[];
  screenshots: { caption: string }[];
}

export const projects: Project[] = [
  {
    slug: "ai-jobs-layoff-risk",
    title: "AI Impact on Jobs & Layoff Risk Analysis",
    tagline: "EDA on 20,000 employee records quantifying AI automation exposure and layoff risk.",
    category: "Machine Learning",
    year: "2025",
    featured: true,
    tech: ["Python", "Pandas", "Seaborn", "Matplotlib", "EDA"],
    illustration: "sql",
    githubUrl: "https://github.com/Vishal123-tech/AI-Impact-on-Jobs-and-Layoff-Risk-Dataset",
    overview:
      "A data-analysis project that curates and explores 20,000 employee records across 15+ industries to quantify AI automation exposure and layoff risk by role, sector and geography. The output is a structured, reproducible dataset and analysis notebook published as an open resource.",
    features: [
      "Curated & analysed 20,000 employee records across 15+ industries",
      "AI automation exposure scoring by role, sector & geography",
      "Engineered risk-tier classification & industry vulnerability index",
      "In-depth EDA with Seaborn & Matplotlib visualizations",
      "Published a reproducible dataset + notebook on GitHub / Kaggle",
    ],
    challenges: [
      "Normalising heterogeneous job-market data across many industries.",
      "Defining a defensible automation-exposure score from raw attributes.",
      "Communicating risk in a stakeholder-ready, visual way.",
    ],
    results: [
      { label: "Employee records analysed", value: 20000 },
      { label: "Industries covered", value: 15, suffix: "+" },
      { label: "Highest-risk sectors", value: 3 },
      { label: "Derived risk features", value: 2, suffix: "+" },
    ],
    resultNarrative:
      "The analysis revealed that IT, Finance and Manufacturing roles face the highest displacement risk. The published dataset and notebook now serve as an open resource for workforce-strategy and AI-policy research.",
    architecture: [
      { step: "Collect", detail: "Curate 20,000 employee records" },
      { step: "Clean", detail: "Normalise across 15+ industries" },
      { step: "Analyse", detail: "EDA + exposure & risk scoring" },
      { step: "Publish", detail: "Open dataset + notebook" },
    ],
    screenshots: [
      { caption: "Layoff risk by industry" },
      { caption: "Automation exposure distribution" },
      { caption: "Risk-tier breakdown" },
    ],
  },
  {
    slug: "customer-segmentation",
    title: "Customer Segmentation & Value Analysis",
    tagline: "RFM + K-Means segmentation isolating the high-value cohorts that drive revenue.",
    category: "Data Analysis",
    year: "2026",
    featured: true,
    tech: ["Python", "Pandas", "K-Means", "Power BI", "Seaborn"],
    illustration: "ml",
    githubUrl: "https://github.com/Vishal123-tech/Customer-Segmentation-Value-Analysis",
    overview:
      "An unsupervised analytics pipeline that segments customers from transactional data using K-Means clustering on engineered RFM features. High-value cohorts are surfaced and communicated through Power BI dashboards to support targeted marketing and retention.",
    features: [
      "Unsupervised K-Means clustering on transactional data",
      "RFM feature engineering (Recency, Frequency, Monetary)",
      "Improved cluster separability & business interpretability",
      "High-value cohort isolation",
      "Power BI dashboards for marketing & retention",
    ],
    challenges: [
      "Choosing a cluster count that separated customers cleanly.",
      "Making abstract clusters business-interpretable via RFM.",
      "Turning segments into actionable marketing strategy.",
    ],
    results: [
      { label: "RFM dimensions", value: 3 },
      { label: "Customer segments", value: 4 },
      { label: "Top-cohort revenue", value: 50, suffix: "%+" },
      { label: "Power BI dashboards", value: 1, suffix: "+" },
    ],
    resultNarrative:
      "RFM-based K-Means produced clearly separated segments and isolated the high-value cohorts driving the majority of revenue — enabling targeted retention and marketing through the Power BI dashboards.",
    architecture: [
      { step: "Ingest", detail: "Load transactional data" },
      { step: "Engineer", detail: "Build RFM features" },
      { step: "Cluster", detail: "K-Means segmentation" },
      { step: "Visualise", detail: "Power BI dashboards" },
    ],
    screenshots: [
      { caption: "RFM feature distribution" },
      { caption: "Cluster scatter projection" },
      { caption: "Power BI segment dashboard" },
    ],
  },
  {
    slug: "diabetes-classification",
    title: "Diabetes Classification Pipeline",
    tagline: "LightGBM + Optuna classification reaching 90.07% accuracy with SHAP explainability.",
    category: "Machine Learning",
    year: "2026",
    featured: true,
    tech: ["Python", "LightGBM", "Optuna", "Scikit-learn", "SHAP"],
    illustration: "ml",
    githubUrl: "https://github.com/Vishal123-tech/Diabetes-Classification-ML",
    overview:
      "An end-to-end binary classification pipeline that predicts diabetes risk. The workflow covers preprocessing, feature engineering, LightGBM modelling, Optuna hyperparameter tuning and SHAP interpretability — pushing accuracy roughly 14 percentage points above the baseline.",
    features: [
      "End-to-end pipeline: preprocessing → model → evaluation",
      "Feature engineering to boost signal",
      "LightGBM model tuned with Optuna",
      "Cross-validated model selection to avoid overfitting",
      "SHAP interpretability for per-feature impact",
    ],
    challenges: [
      "Lifting accuracy ~14 pp above the baseline model.",
      "Preventing overfitting during aggressive hyperparameter search.",
      "Making the model's decisions explainable with SHAP.",
    ],
    results: [
      { label: "Model accuracy", value: 90.07, suffix: "%" },
      { label: "Uplift vs baseline", value: 14, prefix: "+", suffix: " pp" },
      { label: "Cross-validation folds", value: 5 },
      { label: "Optuna trials", value: 50, suffix: "+" },
    ],
    resultNarrative:
      "Engineering the right features and tuning LightGBM with Optuna delivered 90.07% accuracy — about a 14 percentage-point improvement over the baseline — with SHAP confirming which features drove predictions.",
    architecture: [
      { step: "Preprocess", detail: "Clean & encode the dataset" },
      { step: "Engineer", detail: "Derive predictive features" },
      { step: "Tune", detail: "LightGBM + Optuna, CV-validated" },
      { step: "Explain", detail: "SHAP feature attribution" },
    ],
    screenshots: [
      { caption: "Confusion matrix & metrics" },
      { caption: "Optuna optimization history" },
      { caption: "SHAP summary plot" },
    ],
  },
];

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Data Analysis",
  "Machine Learning",
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
