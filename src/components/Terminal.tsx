"use client";

import CommandInput from "@/components/CommandInput";
import OutputLine from "@/components/OutputLine";
import { commands } from "@/lib/commands";
import { useState } from "react";

interface HistoryEntry {
  type: "input" | "output";
  text: string;
}

export default function Page() {
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  const handleCommand = async (cmd: string, args: string[]) => {
    // Adiciona o input do usuário no histórico
    setHistory((prev) => [...prev, { type: "input", text: `$ ${cmd} ${args.join(" ")}` }]);

    // Verifica se o comando existe
    if (!commands[cmd]) {
      setHistory((prev) => [...prev, { type: "output", text: `Command not found: ${cmd}` }]);
      return;
    }

    // Comando "clear" reseta a tela
    if (cmd === "clear") {
      setHistory([]);
      return;
    }

    try {
      const result = await commands[cmd].run(args);
      if (result.trim() !== "") {
        setHistory((prev) => [...prev, { type: "output", text: result }]);
      }
    } catch (error) {
      setHistory((prev) => [...prev, { type: "output", text: `Error executing ${cmd}` }]);
    }
  };

  return (
    <main className="bg-black text-green-400 font-mono h-screen p-4 overflow-y-auto">
      {history.map((line, idx) => (
        <OutputLine
          key={idx}
          text={line.text}
          isInput={line.type === "input"}
        />
      ))}

      <CommandInput onSubmit={handleCommand} />
    </main>
  );
}
