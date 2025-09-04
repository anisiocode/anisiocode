// src/components/Desktop/Window.tsx
import { motion } from "framer-motion";
import { X } from "lucide-react";

type Props = {
  id: number;
  title: string;
  onClose: (id: number) => void;
};

export default function Window({ id, title, onClose }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
      className="absolute overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-96 h-96 rounded-lg border border-gray-600/40 bg-gray-800/40 backdrop-blur-xl"
    >
      <div className="pointer-events-none bg-[url('/noise.webp')] bg-repeat opacity-[0.04] bg-[length:40px_40px] absolute inset-0" />
      <div className="flex items-center justify-between border-b border-gray-600/40 p-1 select-none">
        <span className="font-normal text-xs">{title}</span>
        <button
          onClick={() => onClose(id)}
          className="rounded p-1 hover:bg-red-500/20 focus:outline-none focus:ring-2 focus:ring-red-500/30"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <div className="p-2">Conteúdo da {title}</div>
    </motion.div>
  );
}
