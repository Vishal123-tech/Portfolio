"use client";

import * as React from "react";
import Image from "next/image";
import { illustrationMap, type IllustrationKey } from "@/components/illustrations/dashboards";
import { cn } from "@/lib/utils";

interface ProjectCoverProps {
  illustration: IllustrationKey;
  /** Optional drop-in image from /public/images/projects. Falls back to SVG on error/absence. */
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

/**
 * Renders a real <Image> if a `src` slot is provided and loads successfully,
 * otherwise the on-brand SVG illustration. This is the "SVG now + image slots" model.
 */
export function ProjectCover({ illustration, src, alt, className, priority }: ProjectCoverProps) {
  const [failed, setFailed] = React.useState(false);
  const Art = illustrationMap[illustration];
  const showImage = src && !failed;

  return (
    <div className={cn("relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-muted", className)}>
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      {showImage ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority={priority}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center p-5">
          <Art className="drop-shadow-[0_8px_30px_rgba(120,119,255,0.15)]" />
        </div>
      )}
    </div>
  );
}
