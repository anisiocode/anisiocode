"use client";

import { createContext, useContext } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AppContextType, AppMode } from "@types";

const AppContext = createContext<AppContextType | null>(null);

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  // Determinar o modo através da rota
  const mode: AppMode = pathname.startsWith("/codeplace")
    ? "codeplace"
    : "portfolio";

  // Agora toggle mode significa REDIRECIONAR para outra rota
  const toggleMode = () => {
    if (mode === "portfolio") {
      router.push("/codeplace");
    } else {
      router.push("/");
    }
  };

  const value = {
    mode,
    setMode: () => {}, // Mantemos por compatibilidade, mas não faz nada
    toggleMode,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppContextProvider");
  return ctx;
};
