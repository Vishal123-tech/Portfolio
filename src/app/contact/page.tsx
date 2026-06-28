import type { Metadata } from "next";
import { Mail, Phone, Download, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Vishal Yadav for Data Analyst and Data Science opportunities, freelance analytics or collaborations.",
};

const channels = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail },
  { label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}`, icon: Phone },
  { label: "GitHub", value: "Vishal123-tech", href: siteConfig.links.github, icon: GithubIcon },
  { label: "LinkedIn", value: "vishal-yadav", href: siteConfig.links.linkedin, icon: LinkedinIcon },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&rsquo;s <span className="gradient-text">work together</span>
          </>
        }
        description="Have a role, project or question? Send a message and I'll get back to you within a day."
      />

      <Section className="py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:gap-14">
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="flex flex-col gap-3">
                {channels.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer noopener"
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-brand-violet/30"
                  >
                    <span className="grid size-11 place-items-center rounded-xl border border-border bg-muted text-brand-violet">
                      <c.icon className="size-5" />
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{c.label}</p>
                      <p className="text-sm text-muted-foreground">{c.value}</p>
                    </div>
                    <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="rounded-2xl border border-border bg-card p-5">
                <p className="text-sm text-muted-foreground">
                  Prefer the short version? Grab my résumé.
                </p>
                <a
                  href={siteConfig.resumeUrl}
                  download
                  className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-brand-violet"
                >
                  <Download className="size-4" /> Download Resume (PDF)
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={1}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
