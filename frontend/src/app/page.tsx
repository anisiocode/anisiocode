"use client";

import { useApp } from "@contexts";
import { CODEPLACE, PORTFOLIO } from "@app";

export default function Home() {
  const { mode } = useApp();

  return mode === "codeplace" ? <CODEPLACE /> : <PORTFOLIO />;
}
