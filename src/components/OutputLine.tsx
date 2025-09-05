"use client";

import { useEffect, useState } from "react";

interface OutputLineProps {
  text: string;
  isInput?: boolean;
  speed?: number; // milissegundos por caractere
}

export default function OutputLine({
  text,
  isInput,
  speed = 20,
}: OutputLineProps) {
  const [displayed, setDisplayed] = useState(isInput ? text : "");

  useEffect(() => {
    if (isInput) return; // não anima entradas

    let index = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[index]);
      index++;
      if (index >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, isInput, speed]);

  return (
    <div className={isInput ? "text-green-500" : "text-green-400"}>
      {displayed}
    </div>
  );
}
