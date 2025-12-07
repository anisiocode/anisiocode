"use client";

import {
  AuthContextProvider,
  ThemeContextProvider,
  AppContextProvider,
} from "@contexts";

/**
 * Root provider component that composes context providers in the correct order.
 *
 * Provider hierarchy:
 * 1. ThemeContextProvider - Foundation layer, no dependencies
 * 2. AppContextProvider - UI state management layer
 * 3. AuthContextProvider - Authentication layer with UI dependencies
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContextProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <AppContextProvider>
        <AuthContextProvider>{children}</AuthContextProvider>
      </AppContextProvider>
    </ThemeContextProvider>
  );
}
