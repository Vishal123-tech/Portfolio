"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  // Read the live class on <html> on click so we never depend on post-mount state.
  const toggle = () => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button variant="ghost" size="icon" aria-label="Toggle color theme" onClick={toggle} className="relative">
      <Sun className="size-5 rotate-0 scale-100 transition-transform duration-300 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute size-5 rotate-90 scale-0 transition-transform duration-300 dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
