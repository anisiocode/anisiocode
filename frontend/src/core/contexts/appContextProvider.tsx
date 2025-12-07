"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { AppContextType, AppMode } from "@types";

const AppContext = createContext<AppContextType | null>(null);

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<AppMode | null>(null); // inicializa como null
  const [mounted, setMounted] = useState(false);

  // Carrega do localStorage ao montar
  useEffect(() => {
    const storedMode = localStorage.getItem("appMode") as AppMode | null;
    setMode(storedMode ?? "portfolio"); // se não existir, fallback para "portfolio"
    setMounted(true); // marca que o componente está montado
  }, []);

  // Salva no localStorage sempre que o modo mudar
  useEffect(() => {
    if (mode) localStorage.setItem("appMode", mode);
  }, [mode]);

  const toggleMode = () => {
    if (mode)
      setMode((prev) => (prev === "portfolio" ? "codeplace" : "portfolio"));
  };

  // Evita renderizar enquanto o estado não foi carregado
  if (!mounted || mode === null) return null;

  return (
    <AppContext.Provider value={{ mode, setMode: setMode as any, toggleMode }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppContextProvider");
  return ctx;
};
