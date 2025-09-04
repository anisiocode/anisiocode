// src/components/Desktop/Taskbar.tsx
import { useEffect, useState } from "react";

type Props = {
  openWindow: (title: string) => void;
};

export default function Taskbar({ openWindow }: Props) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    // 
    <button className="relative bottom-5 left-5 w-9 h-9 bg-red-500 rounded-full"></button>
  );
}
