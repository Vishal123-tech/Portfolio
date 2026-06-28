"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  as?: "div" | "section" | "li" | "article";
}

/** Scroll-triggered fade/slide-in. Respects reduced motion via the CSS guard. */
export function Reveal({ children, className, delay = 0, id, as = "div" }: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      id={id}
      className={cn(className)}
      variants={variants}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}
