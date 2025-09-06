// src/lib/commands.ts
import type { Command } from "./types";

export const commands: Record<string, Command> = {
  help: {
    description: "List available commands",
    run: async () =>
      Object.keys(commands)
        .map((c) => `- ${c}`)
        .join("\n"),
  },
  about: {
    description: "About me",
    run: async () => "Hi, I'm Anisio — multifunctional software dev 🚀",
  },
  projects: {
    description: "List my projects",
    run: async () => {
      // (placeholder) - futuramente puxar da API do GitHub
      return "1. Rust CLI Tool\n2. Next.js Terminal Portfolio";
    },
  },
  contact: {
    description: "Show contact info",
    run: async () => "📧 email@email.com\n🔗 linkedin.com/in/anisiocode",
  },
  clear: {
    description: "Clear the terminal",
    run: async () => "",
  },
};
