import React from "react";
import { GlobalStyles as EmotionGlobalStyles } from "tss-react";
import useTheme from "../../hooks/useTheme";
import type { CSSObject } from "tss-react";
import type UxtTheme from "../../theme/UxtTheme";
import { transparentize } from "polished";
import useUxtContentTheme from "../../hooks/useUxtContentTheme";

export interface ScopedStylesProps {
  children: React.ReactNode;
  classes?: Record<any, any>;
}

const ScopedStyles = function ScopedStyles(props: ScopedStylesProps) {
  const { children } = props;

  const theme = useUxtContentTheme() as UxtTheme;

  return (
    <>
      <EmotionGlobalStyles
        styles={{
          // 1) keep the harmless universal
          "*, *::before, *::after": {
            boxSizing: "border-box",
            WebkitBackfaceVisibility: "hidden",
          },

          // 2) let Docusaurus scroll normally
          "html, body": {
            height: "100%",
            minHeight: "100%",
            overflowX: "hidden",
            overflowY: "auto",
            position: "static",
            scrollBehavior: "smooth",
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
            backgroundColor: theme.palette.background.paper,
          },
          ul: { paddingTop: theme.spacing(2) },
          ol: { paddingTop: theme.spacing(2) },
          li: {
            [`& + &`]: { paddingTop: theme.spacing(1) },
          },

          // 3) antialiasing
          html: {
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",

            /* main bar */
            "--ifm-navbar-background-color": `${theme.palette.background.paper} !important`,
            "--ifm-navbar-shadow": `${theme.shadows[1]} !important`,

            /* link colors */
            "--ifm-navbar-link-color": theme.palette.text.primary,
            "--ifm-navbar-link-hover-color": theme.palette.primary.main,
            "--ifm-navbar-link-active-color": theme.palette.primary.main,

            /* height & paddings if you want them aligned with your theme */
            "--ifm-navbar-height": `${theme.height.toolbar ?? 56}px`,
            "--ifm-navbar-padding-vertical": theme.spacing(1),
            "--ifm-navbar-padding-horizontal": theme.spacing(2),

            /* Make sure the DOM element also takes the color (defensive) */
            ".navbar": {
              backgroundColor: "var(--ifm-navbar-background-color) !important",
              boxShadow: "var(--ifm-navbar-shadow)",
            },

            /* Link and brand colors */
            ".navbar .navbar__link, .navbar .navbar__brand": {
              color: "var(--ifm-navbar-link-color) !important",
            },
            ".navbar .navbar__link:hover, .navbar .navbar__link--active": {
              color: "var(--ifm-navbar-link-hover-color) !important",
            },

            /** Sidebar vars */
            "--doc-sidebar-width": 340,
            "--doc-sidebar-hidden-width": 48,

            /* Mobile sidebar/drawer to match your theme */
            ".navbar-sidebar": {
              backgroundColor: theme.palette.background.sidebar,
            },
            ".navbar-sidebar__brand": {
              backgroundColor: theme.palette.background.paper,
              //   borderBottom: `1px solid ${theme.palette.divider} !imporant`,
            },
          },

          // 4) hook MUI + Docusaurus to your theme colors/fonts
          ":root": {
            "--ifm-font-family-base": theme.typography.fontFamily,
            "--ifm-heading-font-family": "var(--ifm-font-family-base)",
            "--ifm-color-primary": theme.palette.primary.main,
            "--ifm-background-color": theme.palette.background.default,
            "--ifm-navbar-background-color": theme.palette.background.topbar,
            "--ifm-navbar-link-color": theme.palette.text.primary,
            "--ifm-navbar-link-hover-color": theme.palette.text.link,
            "--ifm-navbar-shadow": "none",
          },

          // 5) body base text — avoid "fill" here; it affects inline SVGs site-wide
          body: {
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            ...(theme.typography.body1 as CSSObject),
            lineHeight: "normal",
          },

          // 6) keep link styling but don't nuke focus rings
          a: {
            cursor: "pointer",
            textDecoration: "none",
            color: theme.palette.text.link,
            "&:hover": { textDecoration: "underline", color: theme.palette.text.link },
            "&:visited": { color: theme.palette.primary.dark },
            "&:focus": { outline: `2px solid ${theme.palette.primary.main}` },
            "&:active": { color: theme.palette.primary.dark },
          },

          // 7) DO NOT globally override headings or list styles
          // Remove your h1..h6 and li rules to preserve Docusaurus layout

          // 8) Scrollbars — scope to a class to avoid touching every panel/code block
          ".uxt-scroll::-webkit-scrollbar": {
            height: theme.spacing(1),
            width: theme.spacing(1),
            maxHeight: theme.spacing(1),
            maxWidth: theme.spacing(1),
          },
          ".uxt-scroll::-webkit-scrollbar-track": {
            backgroundClip: "padding-box",
            border: "4px solid transparent",
            borderRadius: 8,
            background: `${theme.palette.background.track} !important`,
          },
          ".uxt-scroll::-webkit-scrollbar-thumb": {
            backgroundClip: "padding-box",
            background: transparentize(0.5, theme.palette.background.thumb),
            border: "4px solid transparent",
            borderRadius: 8,
            transition: "all 0.2s ease",
          },
          ".uxt-scroll::-webkit-scrollbar-thumb:hover": {
            background: transparentize(0.0, theme.palette.background.thumb),
          },
          ".uxt-scroll::-webkit-scrollbar-thumb:active": {
            backgroundColor: transparentize(0.2, theme.palette.background.thumb),
          },
          ".navbar__inner": {
            position: "relative",
          },
          ".navbar__brand": {
            marginRight: "auto",
          },
          ".navbar__link.nav-center": {
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          },
          "@media (max-width: 996px)": {
            ".navbar__link.nav-center": {
              position: "static",
              transform: "none",
            },
          },

          /* Apply only on the Products home doc (id: index) */
          "html.docs-doc-id-index": {
            "--ifm-container-width": "100%",
            "--ifm-container-width-md": "100%",
            "--ifm-container-width-lg": "100%",
            "--ifm-container-width-xl": "100%",
          },
          //   "html.docs-doc-id-polar-fire-fpga": {
          //     "--ifm-container-width": "100%",
          //     "--ifm-container-width-md": "100%",
          //     "--ifm-container-width-lg": "100%",
          //     "--ifm-container-width-xl": "100%",
          //   },
        }}
      />

      {children || null}
    </>
  );
};

export default function GlobalStyles(props) {
  const { children } = props;

  return <ScopedStyles children={children} />;
}
