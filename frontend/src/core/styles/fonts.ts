import {
  JetBrains_Mono,
  Rubik,
  Playfair_Display,
  Geist_Mono,
  Geist,
  Poppins,
} from "next/font/google";

export const poppins = Poppins({
  weight: ["300", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const geinst = Geist({
  variable: "--font-geinst",
  subsets: ["latin"],
});

export const geinst_mono = Geist_Mono({
  variable: "--font-geinstMono",
  subsets: ["latin"],
});

export const jetBrains = JetBrains_Mono({
  variable: "--font-jetbrain",
  subsets: ["latin"],
});

export const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});
