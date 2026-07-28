import Link from "next/link";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { navItems, siteConfig } from "@/lib/site";
import { GithubIcon, LinkedinIcon, KaggleIcon } from "@/components/icons";

const socials = [
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: LinkedinIcon },
  { label: "GitHub", href: siteConfig.links.github, icon: GithubIcon },
  { label: "Kaggle", href: siteConfig.links.kaggle, icon: KaggleIcon },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-[#321c16] text-[#f3eee4]">
      <div className="mx-auto max-w-6xl container-px py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.25fr_1fr_1fr_1.25fr]">
          <div>
            <p className="font-serif text-3xl italic">Vishal Yadav</p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#d8c4b5]">
              Data Analyst and Data Science enthusiast passionate about transforming data into meaningful insights and practical solutions.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <h2 className="font-serif text-lg">Navigation</h2>
            {navItems.map((item) => <Link key={item.href} href={item.href} className="w-fit text-sm text-[#d8c4b5] transition-colors hover:text-white">{item.title}</Link>)}
          </nav>

          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-lg">Contact</h2>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-sm text-[#d8c4b5] hover:text-white"><Mail className="size-4" /> {siteConfig.email}</a>
            <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-sm text-[#d8c4b5] hover:text-white"><Phone className="size-4" /> {siteConfig.phone}</a>
            <p className="flex items-center gap-3 text-sm text-[#d8c4b5]"><MapPin className="size-4" /> {siteConfig.location}</p>
          </div>

          <div>
            <h2 className="font-serif text-lg">Let&apos;s Connect</h2>
            <p className="mt-5 text-sm text-[#d8c4b5]">Stay in touch through my social platforms.</p>
            <div className="mt-5 flex gap-3">
              {socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer noopener" aria-label={social.label} className="grid size-10 place-items-center border border-[#8e7063] text-[#f3eee4] transition-colors hover:bg-[#f3eee4] hover:text-[#321c16]"><social.icon className="size-4" /></a>)}
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-end border-b border-[#68473c] pb-6">
          <Link href="#hero" aria-label="Back to top" className="grid size-11 place-items-center border border-[#8e7063] text-[#d8c4b5] transition-colors hover:bg-[#f3eee4] hover:text-[#321c16]"><ArrowUp className="size-4" /></Link>
        </div>

        <div className="footer-wordmark mt-14 text-center font-serif text-[clamp(5rem,18vw,13rem)] uppercase leading-[.7] tracking-[-.08em]">Vishal</div>
        <p className="mt-16 text-center text-xs text-[#d8c4b5]">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
