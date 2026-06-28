"use client";

import { motion } from "framer-motion";

export function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-medium">{name}</span>
        <span className="font-mono text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full rounded-full bg-[linear-gradient(90deg,var(--brand-blue),var(--brand-violet),var(--brand-cyan))]"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
        />
      </div>
    </div>
  );
}
