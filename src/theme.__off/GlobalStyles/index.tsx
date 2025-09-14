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
          },

          // 3) antialiasing
          html: {
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
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
            backgroundColor: theme.palette.background.default,
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

          // 9) Notification stack (as you had it)
          "#UxtNotificationService-SnackbarStack": {
            bottom: 0,
            display: "block",
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
            position: "fixed",
            right: 0,
            width: "100%",
            zIndex: theme.zIndex.notificationPanel,
            [theme.breakpoints.up("sm")]: { width: 480 },
          },
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
