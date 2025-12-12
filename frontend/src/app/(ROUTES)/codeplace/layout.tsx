import type { LayoutFC } from "@types";
import { CODEPLACE_NAVBAR } from "@app";

export const metadata = {
  title: "code_place",
  description: "anisiocode project and store",
};

const CodeplaceLayout: LayoutFC = ({ children }) => {
  return (
    <>
      <CODEPLACE_NAVBAR />
      {children}
    </>
  );
};

export default CodeplaceLayout;
