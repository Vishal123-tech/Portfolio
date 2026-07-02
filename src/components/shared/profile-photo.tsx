"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/** Professional photo slot — drop /public/images/profile.jpg to replace the placeholder. */
export function ProfilePhoto({ className }: { className?: string }) {
  const [failed, setFailed] = React.useState(false);
  return (
    <div className={cn("relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border bg-muted", className)}>
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="absolute -inset-px rounded-3xl [background:linear-gradient(130deg,var(--brand-blue),var(--brand-violet),var(--brand-cyan))] opacity-20" aria-hidden />
      {!failed ? (
        <Image
          src="/images/profile.jpg"
          alt="Vishal Yadav"
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="relative object-cover object-top"
          onError={() => setFailed(true)}
          priority
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center">
          <svg viewBox="0 0 200 200" className="size-2/3" aria-hidden>
            <defs>
              <linearGradient id="pp" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--brand-blue)" />
                <stop offset="100%" stopColor="var(--brand-cyan)" />
              </linearGradient>
            </defs>
            <circle cx="100" cy="76" r="40" fill="url(#pp)" opacity="0.85" />
            <path d="M40 180c0-33 27-54 60-54s60 21 60 54" fill="url(#pp)" opacity="0.85" />
          </svg>
          <span className="absolute bottom-4 font-mono text-xs text-muted-foreground">
            /public/images/profile.jpg
          </span>
        </div>
      )}
    </div>
  );
}
