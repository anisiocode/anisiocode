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

  // A opção que será mostrada no dropdown é a **não selecionada**
  const nextMode = mode === "portfolio" ? "CodePlace" : "Portfolio";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="font-normal">
          {mode === "portfolio" ? "Portfolio" : "CodePlace"}
          <ChevronDown className="size-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start">
        <DropdownMenuItem onClick={toggleMode} className="">
          {nextMode}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
