import React from "react";
import { extractStaticStyle, StyleProvider } from "antd-style";
function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <StyleProvider cache={extractStaticStyle.cache}>{children}</StyleProvider>
  );
}

export default Wrapper;
