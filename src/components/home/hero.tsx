"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { GridBackground, GlowBlobs } from "@/components/shared/grid-background";
import { TechMarquee } from "./tech-marquee";

const floatTags = [
  { label: "Python", x: "8%", y: "22%", d: 0 },
  { label: "SQL", x: "84%", y: "18%", d: 0.6 },
  { label: "Power BI", x: "78%", y: "62%", d: 1.2 },
  { label: "Scikit-learn", x: "12%", y: "66%", d: 0.9 },
  { label: "Pandas", x: "90%", y: "40%", d: 1.5 },
  { label: "NumPy", x: "4%", y: "44%", d: 0.3 },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <GridBackground variant="grid" />
      <GlowBlobs />

      {/* Floating technology chips (hidden on small screens) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        {floatTags.map((t) => (
          <motion.span
            key={t.label}
            className="absolute glass rounded-full px-3 py-1.5 font-mono text-xs text-muted-foreground"
            style={{ left: t.x, top: t.y }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
            transition={{
              opacity: { delay: 0.8 + t.d * 0.2, duration: 0.6 },
              scale: { delay: 0.8 + t.d * 0.2, duration: 0.6 },
              y: { duration: 5 + t.d, repeat: Infinity, ease: "easeInOut", delay: t.d },
            }}
          >
            {t.label}
          </motion.span>
        ))}
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center container-px pb-16 pt-20 text-center md:pt-28">
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3.5 py-1.5 font-mono text-xs text-muted-foreground">
              <Sparkles className="size-3.5 text-brand-violet" />
              Available for Data Analyst & Data Science roles
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 max-w-4xl text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="gradient-text">Data Analyst</span>
            <span className="mx-2 text-muted-foreground/40">|</span>
            <br className="hidden sm:block" />
            <span>Data Science Enthusiast</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-balance text-base text-muted-foreground md:text-lg"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button asChild variant="gradient" size="lg">
              <Link href="/projects">
                View Projects
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={siteConfig.resumeUrl} download={siteConfig.resumeFileName}>
                <Download className="size-4" />
                Download Resume
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="/contact">
                <Mail className="size-4" />
                Contact Me
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.6 }}
          className="mt-16 w-full max-w-3xl"
        >
          <TechMarquee />
        </motion.div>
      </div>
    </section>
  );
}
