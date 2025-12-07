"use client";

import { useApp } from "@contexts";
import { useTheme } from "next-themes";
import { ModeSwitcher, ThemeToggle, Separator, Button } from "@components";
import Link from "next/link";
import { Github } from "lucide-react";

export default function NAVBAR() {
  const { mode, setMode } = useApp();
  const { theme, setTheme } = useTheme();

  const toggleMode = () => {
    setMode(mode === "portfolio" ? "codeplace" : "portfolio");
  };

  return (
    <nav className="flex w-full items-center justify-between px-7 py-2">
      {/* Left Group: Logo + ModeSwitcher */}
      <div className="flex items-center gap-2">
        <Link href={"/"}>
          <Button variant="ghost">anisiocode</Button>
        </Link>

        <div className="text-base fon">{"✕"}</div>

        <ModeSwitcher />
      </div>

      {/* Right Group */}
      <div className="flex flex-row items-center gap-4 h-6">
        <div>links</div>
        <Separator orientation="vertical" />
        <Link href={"https://github.com/anisiocode"} target="_">
          <Button variant={"ghost"}>
            <Github className="size-4" />
          </Button>
        </Link>
        <Separator orientation="vertical" />
        <ThemeToggle />
      </div>
    </nav>
  );
}
