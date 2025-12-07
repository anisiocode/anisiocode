import "@styles";
import { Providers } from "@components";
import type { LayoutFC } from "@types";
import { NAVBAR } from "@app";
import {
  JetBrains_Mono,
  Lusitana,
  Rubik,
  Playfair_Display,
} from "next/font/google";

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

const lusitana = Lusitana({
  weight: ["400", "700"],
  variable: "--font-lusitana",
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
        className={`${jetBrains.variable} ${rubik.variable} ${playfair.variable} ${lusitana.variable} antialiased`}
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
