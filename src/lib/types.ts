// src/lib/types.ts
export interface Command {
  description: string;
  run: (args: string[]) => Promise<string>;
}
