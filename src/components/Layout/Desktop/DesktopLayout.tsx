// src/components/Desktop/DesktopLayout.tsx
"use client";
import { useState } from "react";
import DesktopArea from "./DesktopArea";
import DesktopBackground from "./DesktopBackground";
import Taskbar from "./Taskbar";
import WindowManager, { WindowData } from "./WindowManager";

export default function DesktopLayout() {
  const [windows, setWindows] = useState<WindowData[]>([]);

  const openWindow = (title: string) => {
    setWindows((prev) => [...prev, { id: Date.now(), title }]);
  };

  const closeWindow = (id: number) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  return (
    <div className="relative flex h-screen w-screen flex-col">
      <DesktopBackground />
      <DesktopArea openWindow={openWindow} />
      <WindowManager windows={windows} closeWindow={closeWindow} />
      <Taskbar openWindow={openWindow} />
    </div>
  );
}
