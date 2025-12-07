"use client";

import * as SheetPrimitive from "@radix-ui/react-dialog";

export function SheetRoot(
  props: React.ComponentProps<typeof SheetPrimitive.Root>
) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}
