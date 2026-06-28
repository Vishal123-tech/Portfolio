"use client";

import * as React from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

interface CounterProps {
  to: number;
  durationMs?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

/** Counts up from 0 to `to` the first time it scrolls into view. */
export function Counter({
  to,
  durationMs = 1600,
  prefix = "",
  suffix = "",
  decimals,
  className,
}: CounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const dp = decimals ?? (Number.isInteger(to) ? 0 : 2);
  const [display, setDisplay] = React.useState("0");

  React.useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, to, {
      duration: durationMs / 1000,
      ease: [0.21, 0.47, 0.32, 0.98],
      onUpdate: (v) => {
        setDisplay(
          dp > 0
            ? v.toFixed(dp)
            : new Intl.NumberFormat("en-US").format(Math.round(v))
        );
      },
    });
    return () => controls.stop();
  }, [inView, to, durationMs, motionValue, dp]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
