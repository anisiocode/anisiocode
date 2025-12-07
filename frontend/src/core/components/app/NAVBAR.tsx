"use client";

import { useApp } from "@contexts";
import { useTheme } from "next-themes";
import { ModeSwitcher, ThemeToggle } from "@components";

export default function NAVBAR() {
  const { mode, setMode } = useApp();
  const { theme, setTheme } = useTheme();

  const toggleMode = () => {
    setMode(mode === "portfolio" ? "codeplace" : "portfolio");
  };

  return (
    <nav
      style={{
        width: "100%",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        borderBottom: "1px solid #444",
      }}
    >
      {/* Left: Logo */}
      <div className="text-base">anisiocode</div>

      {/* Center: Mode Switch */}
      <ModeSwitcher />

      {/* Right: Theme Toggle */}
      <ThemeToggle />
    </nav>
  );
}
