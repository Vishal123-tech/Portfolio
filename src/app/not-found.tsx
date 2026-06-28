import Link from "next/link";
import { Home, FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GridBackground, GlowBlobs } from "@/components/shared/grid-background";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[70vh] place-items-center overflow-hidden">
      <GridBackground variant="grid" />
      <GlowBlobs />
      <div className="mx-auto max-w-md px-6 text-center">
        <p className="gradient-text text-7xl font-bold tracking-tight md:text-8xl">404</p>
        <h1 className="mt-4 text-2xl font-bold tracking-tight">Page not found</h1>
        <p className="mt-2 text-muted-foreground">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild variant="gradient">
            <Link href="/">
              <Home className="size-4" /> Back home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/projects">
              <FolderGit2 className="size-4" /> View projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
