// src/components/Desktop/WindowManager.tsx
import { AnimatePresence } from "framer-motion";
import Window from "./Window";

export type WindowData = {
  id: number;
  title: string;
};

type Props = {
  windows: WindowData[];
  closeWindow: (id: number) => void;
};

export default function WindowManager({ windows, closeWindow }: Props) {
  return (
    <AnimatePresence>
      {windows.map((w) => (
        <Window key={w.id} id={w.id} title={w.title} onClose={closeWindow} />
      ))}
    </AnimatePresence>
  );
}
