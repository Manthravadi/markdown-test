import React, { useMemo } from "react";
import OriginalRoot from "@theme-original/Root";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import UxtThemeProvider from "../UxtThemeProvider";
import { TssCacheProvider } from "tss-react";

// If you have theme objects, import them:
import lightTheme from "../light"; // make sure this exports a plain theme object
import GlobalStyles from "../GlobalStyles";

function createEmotionCache() {
  let insertionPoint: HTMLElement | undefined;
  if (typeof document !== "undefined") {
    insertionPoint = document.querySelector('meta[name="emotion-insertion-point"]') ?? undefined;
  }
  return createCache({ key: "mui", insertionPoint });
}

export default function Root(props: { children: React.ReactNode }) {
  const cache = useMemo(() => createEmotionCache(), []);
  return (
    <OriginalRoot {...props}>
      <CacheProvider value={cache}>
        <TssCacheProvider value={cache}>
          <UxtThemeProvider topbarTheme={lightTheme} contentTheme={lightTheme}>
            <GlobalStyles />
            {props.children}
          </UxtThemeProvider>
        </TssCacheProvider>
      </CacheProvider>
    </OriginalRoot>
  );
}
