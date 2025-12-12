import "@styles";
import { Providers } from "@components";
import type { LayoutFC } from "@types";
import { PORTFOLIO_NAVBAR } from "@app";
import {
  poppins,
  jetBrains,
  geinst_mono,
  geinst,
  rubik,
  playfair,
} from "@styles";

export const metadata = {
  title: "App",
  description: "Your app",
};

const RootLayout: LayoutFC = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${poppins.variable}
          ${jetBrains.variable}
          ${geinst_mono.variable}
          ${rubik.variable}
          ${playfair.variable}
          antialiased`}
        suppressHydrationWarning
      >
        <Providers>
          <PORTFOLIO_NAVBAR />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
