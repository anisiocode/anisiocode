"use client";

import { AuthContextProvider, AppContextProvider } from "@contexts";

/**
 * Root provider component that composes context providers in the correct order.
 *
 * Provider hierarchy:
 * 1. AppContextProvider - UI state management layer
 * 2. AuthContextProvider - Authentication layer with UI dependencies
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppContextProvider>
      <AuthContextProvider>{children}</AuthContextProvider>
    </AppContextProvider>
  );
}
