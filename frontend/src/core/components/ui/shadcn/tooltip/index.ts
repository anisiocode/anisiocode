import { TooltipRoot } from "./Root";
import { TooltipProvider } from "./Provider";
import { TooltipTrigger } from "./Trigger";
import { TooltipContent } from "./Content";

export const Tooltip = Object.assign(TooltipRoot, {
  Provider: TooltipProvider,
  Trigger: TooltipTrigger,
  Content: TooltipContent,
});
