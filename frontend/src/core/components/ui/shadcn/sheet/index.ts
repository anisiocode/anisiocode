import { SheetRoot } from "./Root";
import { SheetTrigger } from "./Trigger";
import { SheetClose } from "./Close";
import { SheetPortal } from "./Portal";
import { SheetOverlay } from "./Overlay";
import { SheetContent } from "./Content";
import { SheetHeader } from "./Header";
import { SheetFooter } from "./Footer";
import { SheetTitle } from "./Title";
import { SheetDescription } from "./Description";

export const Sheet = Object.assign(SheetRoot, {
  Trigger: SheetTrigger,
  Close: SheetClose,
  Portal: SheetPortal,
  Overlay: SheetOverlay,
  Content: SheetContent,
  Header: SheetHeader,
  Footer: SheetFooter,
  Title: SheetTitle,
  Description: SheetDescription,
});

export type { SheetContentProps } from "./Content";
