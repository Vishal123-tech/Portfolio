import Link from "next/link";
import { ArrowUpRight, CalendarDays, Code2, GraduationCap, Mail, MapPin, Phone, Award } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";
import { skillGroups } from "@/lib/data/skills";
import { Section, SectionHeading } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { Timeline, type TimelineItem } from "@/components/shared/timeline";
import { ProfilePhoto } from "@/components/shared/profile-photo";
import { Badge } from "@/components/ui/badge";

const journey: TimelineItem[] = [
  { period: "2025 — 2026", title: "End-to-end Data Science Projects", subtitle: "Layoff-risk analysis · Segmentation · Diabetes · Insurance", description: "Built four end-to-end projects spanning EDA, clustering, classification and regression, all published on GitHub.", tags: ["Python", "LightGBM", "Power BI"] },
  { period: "Jun 2026", title: "Introduction to Data Science Job Simulation", subtitle: "Commonwealth Bank · Forage", description: "Completed practical tasks in data aggregation, anonymisation, analysis approaches and database design.", tags: ["Data Analysis", "Databases"] },
  { period: "Jul 2025", title: "Data Analytics Virtual Intern", subtitle: "Deloitte · Forage", description: "Built ETL processes in Excel and Tableau and designed interactive dashboards communicating KPIs to stakeholders.", tags: ["Tableau", "ETL", "Dashboards"] },
];

const education = [
  { period: "2023 — 2027", title: "B.E. — Electrical, Electronics & Communications Engineering", school: "Shree L. R. Tiwari College of Engineering", location: "Mumbai, Maharashtra, India", result: "Final-year student", areas: ["Python & SQL", "Data Structures", "Machine Learning", "Database Management", "Power BI & Tableau", "Statistics & Analytics", "Deep Learning", "Cybersecurity"] },
  { period: "2020 — 2022", title: "Class XII — Science (HSC)", school: "Shri T. P. Bhatia Junior College of Science", location: "Mumbai, Maharashtra, India", result: "Science stream", areas: ["Mathematics", "Physics", "Chemistry", "Computer Fundamentals", "Problem Solving"] },
  { period: "2019 — 2020", title: "Class X (SSC)", school: "Sardar Vallabhbhai Patel Vividhlaxi Vidhyalaya", location: "Mumbai, Maharashtra, India", result: "Secondary School Certificate", areas: ["Mathematics", "Science", "English", "Social Studies", "Computer Basics"] },
];

export function PortfolioAbout() {
  return <Section id="about"><SectionHeading align="left" eyebrow="About me" title="Turning data into decisions." description="A data-focused builder who enjoys finding the signal in complex datasets and turning it into clear, useful stories." /><div className="grid gap-10 md:grid-cols-[260px_1fr] md:gap-16"><Reveal><ProfilePhoto /><div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground"><MapPin className="size-4" /> {siteConfig.location}</div></Reveal><Reveal delay={1} className="space-y-6"><p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">I’m Vishal Yadav, a Data Science & Analytics fresher with hands-on experience in predictive modelling, EDA, ETL, SQL and BI reporting.</p><p className="max-w-2xl leading-relaxed text-muted-foreground">I combine strong Python and SQL fundamentals with a practical approach to machine learning and stakeholder-ready visualisation. My goal is to make data easier to understand and more valuable to the people using it.</p><div className="grid gap-4 border-y border-border py-5 sm:grid-cols-3"><div><p className="editorial-label text-muted-foreground">Focus</p><p className="mt-2">Analytics & ML</p></div><div><p className="editorial-label text-muted-foreground">Based in</p><p className="mt-2">Mumbai, India</p></div><div><p className="editorial-label text-muted-foreground">Status</p><p className="mt-2">Open to opportunities</p></div></div></Reveal></div></Section>;
}

export function PortfolioSkills() {
  return <Section id="skills"><SectionHeading align="left" eyebrow="My expertise" title="A toolkit for the full data workflow." description="From raw data and exploratory analysis to models, dashboards and decisions." /><div className="grid gap-5 md:grid-cols-2">{skillGroups.map((group, i) => <Reveal key={group.category} delay={i % 2} className="border border-border bg-card p-6 md:p-7"><p className="editorial-label text-muted-foreground">0{i + 1} · {group.category}</p><p className="mt-4 max-w-md text-muted-foreground">{group.blurb}</p><div className="mt-5 flex flex-wrap gap-2">{group.skills.map((skill) => <Badge key={skill.name} variant="mono">{skill.name}</Badge>)}</div></Reveal>)}</div></Section>;
}

export function PortfolioExperience() { return <Section id="experience"><SectionHeading align="left" eyebrow="My journey" title="Learning by building." description="A short timeline of study, projects and certifications." /><Timeline items={journey} /></Section>; }

export function PortfolioEducation() {
  return (
    <Section id="education" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -top-8 left-0 font-serif text-[clamp(6rem,18vw,15rem)] font-bold uppercase leading-none tracking-[-0.08em] text-foreground/[0.035]">Learn</div>
      <div className="relative mb-12 grid gap-8 border-t border-border pt-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <div>
          <p className="editorial-label section-marker text-muted-foreground">Academic background</p>
          <h2 className="mt-6 max-w-xl text-5xl leading-[0.92] md:text-7xl">Education<br /><em>& foundation</em></h2>
        </div>
        <p className="max-w-sm text-base leading-relaxed text-muted-foreground md:justify-self-end">My educational journey shaped the technical foundation behind my work in data science, analytics and machine learning.</p>
      </div>
      <div className="relative space-y-5">
        {education.map((item) => (
          <Reveal key={item.title} className="education-card-wrap">
            <article className="education-card relative grid gap-8 border border-border bg-card p-7 shadow-[0_16px_0_rgba(75,47,34,0.04),0_24px_32px_rgba(75,47,34,0.08)] md:grid-cols-[minmax(250px,0.75fr)_1.25fr] md:p-10">
              <div>
                <div className="mb-7 grid size-14 place-items-center bg-muted text-brand-violet"><GraduationCap className="size-7" /></div>
                <p className="flex items-center gap-2 text-sm text-muted-foreground"><CalendarDays className="size-4" /> {item.period}</p>
                <h3 className="mt-4 text-2xl leading-tight">{item.title}</h3>
                <p className="mt-4 flex items-start gap-2 font-medium leading-relaxed"><MapPin className="mt-1 size-4 shrink-0 text-brand-violet" /> {item.school}</p>
                <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="size-4 shrink-0" /> {item.location}</p>
                <p className="mt-4 flex items-center gap-2 text-sm"><Award className="size-4 text-brand-violet" /> {item.result}</p>
              </div>
              <div className="border-t border-border pt-7 md:border-l md:border-t-0 md:pl-10 md:pt-0">
                <h4 className="flex items-center gap-3 text-xl"><Code2 className="size-5 text-brand-violet" /> Key areas of study</h4>
                <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {item.areas.map((area) => <li key={area} className="flex items-start gap-3 text-muted-foreground"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground" />{area}</li>)}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function PortfolioContact() { const channels = [{ label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail }, { label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}`, icon: Phone }, { label: "GitHub", value: "Vishal123-tech", href: siteConfig.links.github, icon: GithubIcon }, { label: "LinkedIn", value: "vishal-yadav", href: siteConfig.links.linkedin, icon: LinkedinIcon }]; return <Section id="contact"><SectionHeading align="left" eyebrow="Get in touch" title="Let’s work together." description="Have a role, project or question? I’d love to hear from you." /><div className="grid gap-10 md:grid-cols-2"><div className="space-y-3">{channels.map((channel) => { const Icon = channel.icon; return <Link key={channel.label} href={channel.href} className="group flex items-center gap-4 border-b border-border py-4"><Icon className="size-5 text-brand-violet" /><span className="flex-1"><span className="block text-sm uppercase tracking-[0.14em]">{channel.label}</span><span className="text-sm text-muted-foreground">{channel.value}</span></span><ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link>; })}</div><div className="border border-border bg-card p-7"><p className="editorial-label text-muted-foreground">Next step</p><h3 className="mt-5 text-3xl">Let’s turn your data into decisions.</h3><p className="mt-4 leading-relaxed text-muted-foreground">I’m open to Data Analyst and Data Science opportunities, freelance analytics and collaborations.</p><Link href={siteConfig.resumeUrl} className="mt-7 inline-flex border border-foreground bg-foreground px-5 py-3 text-sm uppercase tracking-[0.14em] text-background transition-opacity hover:opacity-80">View resume ↗</Link></div></div></Section>; }
