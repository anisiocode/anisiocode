"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@ui";
// import { Contrast } from "lucide-react";
import { ThemeIcon } from "@components";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggle = () => {
    if (!mounted) return;
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      onClick={toggle}
      aria-label="Toggle theme"
    >
      <ThemeIcon className="size-4" />
    </Button>
  );
}
