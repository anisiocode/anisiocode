// app/page.tsx
"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import DesktopLayout from "@/components/Layout/Desktop/DesktopLayout";
import MobileLayout from "@/components/Layout/MobileLayout";
import TabletLayout from "@/components/Layout/TabletLayout";

import { loadTasks } from "@/utils/loadTasks";

export default function Home() {
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile" | null>(
    null
  );
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  // Detecta tamanho de tela
  function handleResize() {
    const width = window.innerWidth;
    if (width <= 480) {
      setDevice("mobile");
    } else if (width <= 834) {
      setDevice("tablet");
    } else if (width <= 1440) {
      setDevice("desktop");
    } else {
      setDevice("desktop");
    }
  }

  useEffect(() => {
    async function init() {
      const tasks = await loadTasks();
      const step = 100 / tasks.length;

      for (let i = 0; i < tasks.length; i++) {
        await tasks[i](); // executa a tarefa
        setProgress((p) => Math.min(100, p + step));
      }

      handleResize();
      setTimeout(() => setLoading(false), 500);
    }

    init();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const layouts = {
    desktop: <DesktopLayout />,
    tablet: <TabletLayout />,
    mobile: <MobileLayout />,
  };

  return (
    <main className="h-screen w-screen overflow-hidden">
      {/* Tela de carregamento */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center"
          >
            <div className="mb-[1px] w-64 flex flex-row justify-between">
              <div className="text-base font-normal text-white">Loading...</div>
              <div className="text-sm text-white-400">
                {progress.toFixed(2)}%
              </div>
            </div>

            <div className="h-2 w-64 rounded-[4px] bg-[#1d3227]">
              <motion.div
                className="h-full rounded-full bg-[#23d56f]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut", duration: 0.4 }}
              />
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 font-normal text-sm italic text-white/50">
              Anisio Nkula
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Layout principal */}
      {!loading && device && (
        <AnimatePresence mode="wait">
          <motion.div
            key={device}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="h-full w-full"
          >
            {layouts[device]}
          </motion.div>
        </AnimatePresence>
      )}
    </main>
  );
}
