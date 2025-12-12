import "@styles";
import { Providers } from "@components";
import type { LayoutFC } from "@types";
import { NAVBAR } from "@app";
import {
  JetBrains_Mono,
  Rubik,
  Playfair_Display,
  Geist_Mono,
  Geist,
  Poppins,
} from "next/font/google";

const poppins = Poppins({
  weight: ["300", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const geinst = Geist({
  variable: "--font-geinst",
  subsets: ["latin"],
});

const geinst_mono = Geist_Mono({
  variable: "--font-geinstMono",
  subsets: ["latin"],
});
const jetBrains = JetBrains_Mono({
  variable: "--font-jetbrain",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  title: "App",
  description: "Your app",
};

const RootLayout: LayoutFC = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${jetBrains.variable} ${geinst_mono.variable} ${rubik.variable} ${playfair.variable} antialiased`}
        suppressHydrationWarning
      >
        <Providers>
          <NAVBAR />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
