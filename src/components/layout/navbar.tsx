"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navItems, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Logo } from "./logo";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "glass border-b border-border" : "border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between container-px">
        <Logo />

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {isActive(item.href) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-lg bg-muted"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild variant="gradient" size="sm" className="hidden md:inline-flex">
            <a href={siteConfig.resumeUrl} download>
              <Download className="size-4" />
              Resume
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border glass md:hidden"
          >
            <ul className="flex flex-col gap-1 container-px py-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive(item.href)
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Button asChild variant="gradient" className="w-full">
                  <a href={siteConfig.resumeUrl} download>
                    <Download className="size-4" />
                    Download Resume
                  </a>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
