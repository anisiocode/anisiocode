import "@styles";
import { Providers } from "@components";
import type { LayoutFC } from "@types";
import { NAVBAR } from "@app";
import { JetBrains_Mono } from "next/font/google";

const jetBrains = JetBrains_Mono({
  variable: "--font-jetbrain",
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
        className={`${jetBrains.variable} antialiased`}
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
