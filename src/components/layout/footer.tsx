import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { navItems, siteConfig } from "@/lib/site";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Logo } from "./logo";

const socials = [
  { label: "GitHub", href: siteConfig.links.github, icon: GithubIcon },
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: LinkedinIcon },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
];

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 container-px py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-xs text-sm text-muted-foreground">
            {siteConfig.description}
          </p>
          <div className="flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={s.label}
                className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-brand-violet/40 hover:text-foreground"
              >
                <s.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <nav className="flex flex-col gap-3">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Navigate
          </p>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Get in touch
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {siteConfig.email}
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={siteConfig.resumeUrl}
            download
            className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Download résumé
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 container-px py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="font-mono">Built with Next.js · Tailwind · Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
