// // src/theme/Root/index.tsx
// import React, { useEffect, useMemo, useState } from "react";
// import OriginalRoot from "@theme-original/Root";
// import { CacheProvider } from "@emotion/react";
// import createCache from "@emotion/cache";
// import { ThemeProvider } from "@mui/material/styles";
// import { TssCacheProvider } from "tss-react";

// import lightTheme from "../light";
// import darkTheme from "../dark";
// import GlobalStyles from "../GlobalStyles";

// function createEmotionCache() {
//   let insertionPoint: HTMLElement | undefined;
//   if (typeof document !== "undefined") {
//     insertionPoint = document.querySelector('meta[name="emotion-insertion-point"]') ?? undefined;
//   }
//   return createCache({ key: "mui", insertionPoint });
// }

// function readModeFromDom(): "light" | "dark" {
//   if (typeof document === "undefined") return "light";
//   const html = document.documentElement;
//   const attr = html.getAttribute("data-theme");
//   if (attr === "dark" || attr === "light") return attr;
//   // fallback: some themes add class `theme-dark`
//   return html.classList.contains("theme-dark") ? "dark" : "light";
// }

// function MuiProviders({ children }: { children: React.ReactNode }) {
//   const cache = useMemo(() => createEmotionCache(), []);
//   const [mode, setMode] = useState<"light" | "dark">(readModeFromDom());

//   // Watch for Docusaurus color mode changes
//   useEffect(() => {
//     const html = document.documentElement;
//     const observer = new MutationObserver(() => setMode(readModeFromDom()));
//     observer.observe(html, { attributes: true, attributeFilter: ["data-theme", "class"] });
//     // also handle first paint
//     setMode(readModeFromDom());
//     return () => observer.disconnect();
//   }, []);

//   const theme = mode === "dark" ? darkTheme : lightTheme;

//   return (
//     <CacheProvider value={cache}>
//       <TssCacheProvider value={cache}>
//         <ThemeProvider theme={theme}>
//           <>
//             <GlobalStyles />
//             {children}
//           </>
//         </ThemeProvider>
//       </TssCacheProvider>
//     </CacheProvider>
//   );
// }

// export default function Root(props: { children: React.ReactNode }) {
//   // Wrap, don't replace: our providers render *inside* the original Root tree
//   return (
//     <OriginalRoot {...props}>
//       <MuiProviders>{props.children}</MuiProviders>
//     </OriginalRoot>
//   );
// }

import React from "react";
import OriginalRoot from "@theme-original/Root";
export default function Root(props: { children: React.ReactNode }) {
  return <OriginalRoot {...props} />;
}
