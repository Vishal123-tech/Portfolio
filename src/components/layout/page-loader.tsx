"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

/** Brief branded intro shown once per page load, then fades away. */
export function PageLoader() {
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setDone(true), 1300);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[999] grid place-items-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="bg-grid absolute inset-0 mask-fade opacity-60" />
          <div className="relative flex flex-col items-center gap-6">
            <motion.svg
              viewBox="0 0 24 24"
              className="size-12"
              fill="none"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <motion.path
                d="M4 5l5 14 3-8 3 8 5-14"
                stroke="url(#g)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="g" x1="0" y1="0" x2="24" y2="24">
                  <stop offset="0%" stopColor="var(--brand-blue)" />
                  <stop offset="50%" stopColor="var(--brand-violet)" />
                  <stop offset="100%" stopColor="var(--brand-cyan)" />
                </linearGradient>
              </defs>
            </motion.svg>
            <div className="h-0.5 w-40 overflow-hidden rounded-full bg-muted">
              <motion.div
                className="h-full bg-[linear-gradient(90deg,var(--brand-blue),var(--brand-violet),var(--brand-cyan))]"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
