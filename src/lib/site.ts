export const siteConfig = {
  name: "Vishal Yadav",
  role: "Data Analyst | Data Science Enthusiast",
  description:
    "Building impactful data solutions with SQL, Python, Machine Learning, and Power BI.",
  url: "https://portfolio-one-sigma-39.vercel.app",
  location: "Mumbai, Maharashtra, India",
  email: "vishalyadav.analytics@gmail.com",
  phone: "+91 9619039381",
  resumeUrl: "/resume.pdf",
  resumeFileName: "Vishal_Yadav_Resume.pdf",
  links: {
    github: "https://github.com/Vishal123-tech",
    linkedin: "https://www.linkedin.com/in/vishal-yadav-339b9b1b5",
    kaggle: "https://www.kaggle.com/vishalinsightx",
  },
  keywords: [
    "Vishal Yadav",
    "Data Analyst",
    "Data Science",
    "Machine Learning",
    "Power BI",
    "Tableau",
    "SQL",
    "Python",
    "Mumbai",
    "Portfolio",
  ],
} as const;

export type NavItem = { title: string; href: string };

export const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
  { title: "Skills", href: "/skills" },
  { title: "Certifications", href: "/certifications" },
  { title: "Contact", href: "/contact" },
];
