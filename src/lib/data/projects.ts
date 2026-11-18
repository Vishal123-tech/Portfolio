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
  screenshots: { caption: string; src?: string }[];
}

export const projects: Project[] = [
  {
    slug: "insurance-cost-prediction",
    title: "Medical Insurance Cost Prediction",
    tagline: "End-to-end regression pipeline predicting annual medical charges at R² 0.90, served through an interactive Streamlit app.",
    category: "Machine Learning",
    year: "2026",
    featured: false,
    tech: ["Python", "Scikit-learn", "HistGradientBoosting", "Streamlit", "Pandas"],
    illustration: "ml",
    githubUrl: "https://github.com/Vishal123-tech/Medical-Insurance-cost-prediction",
    overview:
      "A complete supervised-regression project that predicts an individual's annual medical insurance charge from six demographic and lifestyle features. It spans the full lifecycle — EDA, a scikit-learn preprocessing + model Pipeline, cross-validated comparison of four algorithms, GridSearch tuning of a HistGradientBoosting model, held-out evaluation, model persistence, and a deployed Streamlit app with a live smoker 'what-if' counterfactual.",
    features: [
      "Single scikit-learn Pipeline (preprocessing + model) — zero train/serve skew",
      "Four models compared with 5-fold cross-validation",
      "HistGradientBoosting tuned via GridSearchCV",
      "Reached test R² 0.897 (RMSE ≈ $4.4k) on a held-out set",
      "Permutation importance + smoker counterfactual for interpretability",
      "Interactive Streamlit app with real-time predictions",
    ],
    challenges: [
      "Linear baselines plateaued at R² ≈ 0.73 — capturing the smoker × BMI interaction needed a tree ensemble.",
      "Preventing data leakage by fitting all preprocessing inside cross-validation folds.",
      "Serving raw records safely by bundling preprocessing into the persisted pipeline.",
    ],
    results: [
      { label: "Test R²", value: 0.897 },
      { label: "Test RMSE", value: 4353, prefix: "$" },
      { label: "Records modelled", value: 1337 },
      { label: "Models compared", value: 4 },
    ],
    resultNarrative:
      "Choosing a model family that captures interactions lifted performance from R² ≈ 0.73 (linear) to 0.897 with tuned HistGradientBoosting. Permutation importance confirmed smoking as the dominant cost driver, and the Streamlit app makes that tangible through a real-time smoker counterfactual.",
    architecture: [
      { step: "Explore", detail: "EDA on 1,337 records" },
      { step: "Preprocess", detail: "Scale + one-hot in a Pipeline" },
      { step: "Tune", detail: "4 models, CV + GridSearch" },
      { step: "Deploy", detail: "Streamlit prediction app" },
    ],
    screenshots: [
      { caption: "Streamlit predictor UI" },
      { caption: "Predicted vs. actual charges" },
      { caption: "Permutation feature importance" },
    ],
  },
  {
    slug: "ai-jobs-layoff-risk",
    title: "AI Impact on Jobs & Layoff Risk Analysis",
    tagline: "EDA on 20,000 employee records quantifying AI automation exposure and layoff risk.",
    category: "Machine Learning",
    year: "2025",
    featured: false,
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
    featured: false,
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
    featured: false,
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
  {
    slug: "ai-skin-disease-detection",
    title: "SkinScanix — AI Skin Disease Detection",
    tagline: "Educational computer-vision prototype that screens uploaded skin images and generates an explainable PDF report.",
    category: "Machine Learning",
    year: "2026",
    featured: true,
    tech: ["Python", "Gradio", "TensorFlow Lite", "MobileNetV2", "OpenCV", "ReportLab"],
    illustration: "ml",
    liveUrl: "https://ai-skin-disease-detection-system.onrender.com/",
    githubUrl: "https://github.com/Vishal123-tech/AI-Skin-Disease-Detection-System",
    overview:
      "SkinScanix is an educational image-analysis prototype that takes a skin photograph through image-quality checks, skin/non-skin screening, condition classification and downloadable PDF report generation. It combines a Gradio browser interface with server-side TensorFlow Lite models, optional consented feedback collection and a separate Raspberry Pi camera/API workflow.",
    features: [
      "Browser upload and supported camera-capture workflow",
      "Image sharpness and brightness quality checks",
      "Four-condition SCIN baseline classifier with uncertain/non-skin routing",
      "TensorFlow Lite / LiteRT inference for compact server-side models",
      "Branded A4 PDF reports with results, quality information and limitations",
      "Separate Flask API and Raspberry Pi camera client for experimentation",
    ],
    challenges: [
      "Separating common-condition image classification from the legacy dermoscopic lesion workflow.",
      "Handling uncertain, non-skin and low-quality images without presenting an overconfident result.",
      "Designing a responsible prototype with explicit privacy, validation and medical-use limitations.",
    ],
    results: [
      { label: "Main condition classes", value: 4 },
      { label: "Legacy lesion labels", value: 7 },
      { label: "Inference format", value: 1, suffix: " TFLite" },
      { label: "Report format", value: 1, suffix: " PDF" },
    ],
    resultNarrative:
      "The project demonstrates a complete computer-vision product flow from image upload to model assessment and report generation. It is an educational prototype only: predictions can be incorrect and are not a medical diagnosis or a basis for treatment decisions.",
    architecture: [
      { step: "Capture", detail: "Upload or camera image" },
      { step: "Check", detail: "Sharpness, brightness & skin gate" },
      { step: "Infer", detail: "TFLite image classification" },
      { step: "Report", detail: "Result panel + PDF download" },
    ],
    screenshots: [
      { caption: "SkinScanix browser interface", src: "/images/projects/skinscanix-ui.png" },
      { caption: "Generated PDF report", src: "/images/projects/skinscanix-report.png" },
      { caption: "Image assessment and confidence panel", src: "/images/projects/skinscanix-analysis.png" },
    ],
  },
  {
    slug: "banking-risk-analytics-platform",
    title: "Banking Risk Analytics Platform",
    tagline: "Interactive risk analytics suite for securitised auto-loan portfolios with PD modelling, ECL, roll rates and stress testing.",
    category: "Data Analysis",
    year: "2026",
    featured: true,
    tech: ["Python", "Streamlit", "SQL", "Power BI", "IFRS 9 ECL"],
    illustration: "dashboard",
    liveUrl: "https://n4dmtn9tondqgarhqhzkbn.streamlit.app/",
    githubUrl: "https://github.com/Vishal123-tech/Banking-Risk-Analytics-Platform-",
    overview:
      "A reproducible banking-risk analytics suite built around a synthetic securitised auto-loan portfolio. It combines a Streamlit dashboard, SQL insights, baseline probability-of-default modelling, IFRS 9-style expected-credit-loss analysis, delinquency roll rates, vintage curves and scenario-based stress testing.",
    features: [
      "Interactive portfolio overview with balance, ECL, loss and collection KPIs",
      "DPD staging, delinquency roll-rate analysis and vintage loss curves",
      "Baseline PD model with stratified out-of-fold evaluation and calibration diagnostics",
      "IFRS 9-style PD × LGD × EAD expected-credit-loss calculations",
      "Illustrative base, recession, COVID and 2008 stress scenarios",
      "SQL Insights page with filtered portfolio queries and CSV export",
    ],
    challenges: [
      "Keeping risk calculations reproducible across dashboard filters and scenario assumptions.",
      "Avoiding target leakage by separating origination-time features from delinquency outcomes.",
      "Presenting technical credit-risk concepts in a decision-ready dashboard experience.",
    ],
    results: [
      { label: "Loans modelled", value: 500 },
      { label: "DPD snapshots", value: 6000, suffix: "+" },
      { label: "Base ECL", value: 8.74, prefix: "₹", suffix: " Cr" },
      { label: "PD model AUC", value: 0.7252 },
    ],
    resultNarrative:
      "The platform turns a synthetic loan portfolio into a complete risk-analysis workflow: early-warning delinquency views, baseline PD diagnostics, portfolio-level ECL and scenario comparison. It is designed as a portfolio and learning project, not a production credit-decision or regulatory model.",
    architecture: [
      { step: "Ingest", detail: "Loan, DPD, loss & vintage tables" },
      { step: "Model", detail: "PD, staging, ECL & roll rates" },
      { step: "Stress", detail: "Scenario-weighted portfolio impact" },
      { step: "Decide", detail: "Streamlit, SQL & Power BI insights" },
    ],
    screenshots: [
      { caption: "Interactive banking risk dashboard" },
      { caption: "DPD roll-rate and portfolio exposure analysis" },
      { caption: "Stress-testing and expected-credit-loss views" },
    ],
  },
  {
    slug: "olist-ecommerce-data-analytics",
    title: "Olist E-commerce Data Analytics",
    tagline: "End-to-end marketplace analytics covering sales, customer value, logistics, forecasting and Power BI storytelling.",
    category: "Data Analysis",
    year: "2026",
    featured: true,
    tech: ["Python", "Pandas", "SQL", "Excel", "Power BI", "DAX"],
    illustration: "powerbi",
    githubUrl: "https://github.com/Vishal123-tech/Olist-Ecommerce-Data-Analytics",
    overview:
      "An end-to-end analysis of the Brazilian Olist e-commerce dataset. The workflow integrates marketplace tables, cleans and analyses orders, customers, products, payments, reviews and sellers, then turns the results into Power BI dashboards and business recommendations.",
    features: [
      "Revenue, orders and average-order-value trends by category and region",
      "RFM segmentation, customer lifetime value and churn-risk analysis",
      "Delivery-delay, review-performance and seller-performance analysis",
      "SQL and Excel analysis supporting an interactive Power BI model",
      "Revenue and order-demand forecasting with predictive indicators",
      "Management-ready recommendations for growth, retention and operations",
    ],
    challenges: [
      "Integrating nine related marketplace tables into a consistent analytical model.",
      "Connecting customer, product, logistics and review metrics without double-counting orders.",
      "Turning descriptive KPIs into practical retention, inventory and delivery decisions.",
    ],
    results: [
      { label: "Marketplace orders", value: 100000, suffix: " approx." },
      { label: "Source tables", value: 9 },
      { label: "Report areas", value: 5 },
      { label: "Core analyses", value: 4, suffix: "+" },
    ],
    resultNarrative:
      "The project moves from integrated marketplace data to decision support: business overview, customer and product performance, logistics and regional opportunity, plus predictive indicators for demand and churn risk.",
    architecture: [
      { step: "Integrate", detail: "Join nine Olist marketplace tables" },
      { step: "Analyse", detail: "Python, SQL & Excel workflows" },
      { step: "Model", detail: "RFM, CLV, churn & forecasting" },
      { step: "Tell", detail: "Power BI dashboards & recommendations" },
    ],
    screenshots: [
      { caption: "Olist business overview dashboard" },
      { caption: "Customers, products and RFM segmentation" },
      { caption: "Logistics, regions and strategic insights" },
    ],
  },
];

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Data Analysis",
  "Machine Learning",
];

/** Keeps the latest flagship project at the top wherever projects are displayed. */
export const projectsInDisplayOrder = [...projects].sort((a, b) => {
  if (a.slug === "ai-skin-disease-detection") return -1;
  if (b.slug === "ai-skin-disease-detection") return 1;
  return 0;
});

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
