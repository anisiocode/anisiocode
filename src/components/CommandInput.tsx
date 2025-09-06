"use client";

import { useEffect, useState } from "react";

interface CommandInputProps {
  onSubmit: (cmd: string, args: string[]) => void;
}

export default function CommandInput({ onSubmit }: CommandInputProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [index, setIndex] = useState(-1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const [cmd, ...args] = input.trim().split(" ");
    onSubmit(cmd, args);

    setHistory((prev) => [...prev, input]);
    setInput("");
    setIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      setIndex((i) => Math.min(i + 1, history.length - 1));
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIndex((i) => Math.max(i - 1, -1));
    }
  };

  useEffect(() => {
    if (index >= 0) {
      setInput(history[history.length - 1 - index]);
    } else {
      setInput("");
    }
  }, [index]);

  return (
    <form onSubmit={handleSubmit} className="flex">
      <span className="mr-2">$</span>
      <div className="flex">
        <input
          type="text"
          className="bg-black outline-none text-green-400 font-mono"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
        {/* <Cursor /> */}
      </div>
    </form>
  );
}
