"use client";

import { useApp } from "@contexts";
import { Button } from "@ui";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@ui";
import { ArrowBigDown, ArrowDown, ChevronDown } from "lucide-react";

export default function ModeSwitcher() {
  const { mode, toggleMode } = useApp();

  // The option that will appear in the dropdown is the not selected
  const nextMode = mode === "portfolio" ? "code_place" : "Portfolio";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="text-xs md:text-sm font-thin md:font-normal"
        >
          {mode === "portfolio" ? "[ anisiocode ]" : "[ code_place ]"}
          <ChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start">
        <DropdownMenuItem
          onClick={toggleMode}
          className="text-xs md:text-sm font-thin md:font-normal"
        >
          {nextMode}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
