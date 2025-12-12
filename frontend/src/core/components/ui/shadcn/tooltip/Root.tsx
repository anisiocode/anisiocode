"use client";
import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { TooltipProvider } from "./Provider";

export function TooltipRoot(
  props: React.ComponentProps<typeof TooltipPrimitive.Root>
) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}
