// src/uxt-theme/_internal/base.ts
import React from "react";
import type { ThemeOptions, ComponentsOverrides } from "@mui/material/styles";
import type { Color, PaletteMode } from "@mui/material";
import { alpha, createTheme } from "@mui/material/styles";
import deepmerge from "deepmerge";
import tokens from "./baseLight";
import type UxtTheme from "../UxtTheme";
import type { HexagonBrandingColors, HexagonStatusColors, HexagonUIColors, UxtHeight, UxtPalette, UxtTypeText } from "../UxtTheme";
import { CommonColors } from "@mui/material/styles";
import { PaletteColor } from "@mui/material/styles";
import { PaletteColorOptions } from "@mui/material/styles";

const theme = tokens.uxt.theme;

export type TypeDivider = string;

export type PaletteTonalOffset =
  | number
  | {
      light: number;
      dark: number;
    };

export interface PaletteAugmentColorOptions {
  color: PaletteColorOptions;
  mainShade?: number | string;
  lightShade?: number | string;
  darkShade?: number | string;
  name?: number | string;
}

// Optional React DOMAttributes augmentation you had:
declare module "react" {
  // type StatelessComponent<T> = React.FunctionComponent<T>;
}
declare global {
  namespace React {
    interface DOMAttributes<T> {
      onResize?: React.ReactEventHandler<T> | undefined;
      onResizeCapture?: React.ReactEventHandler<T> | undefined;
      nonce?: string | undefined;
      // onTransitionStart?: (e: React.TransitionEvent) => void;
      // onTransitionRun?: (e: React.TransitionEvent) => void;
    }
  }
}

/**
 * ✅ Consolidated augmentation: always target the root module
 * '@mui/material/styles' when using `moduleResolution: "bundler"`.
 */
declare module "@mui/material/styles" {
  // ----- Theme shape extensions -----
  interface Theme {
    height: UxtHeight;
    palette: UxtPalette;
  }
  interface ThemeOptions {
    height?: UxtHeight;
    text?: UxtTypeText;
  }

  // ----- Mixins -----
  interface Mixins {
    absoluteFill: {
      bottom: number;
      left: number;
      position: React.CSSProperties["position"];
      right: number;
      top: number;
    };
    readableWidth: {
      maxWidth: React.CSSProperties["maxWidth"];
      width: React.CSSProperties["width"];
    };
    // toolbar?: React.CSSProperties;
  }

  // ----- Palette extensions -----
  interface TypeBackground {
    default: string;
    paper: string;
    sidebar?: string;
    thumb?: string;
    topbar?: string;
    card?: string;
    icon?: string; // you reference background.icon in dark theme
    track?: string;
  }

  interface TypeText {
    primary: string;
    secondary: string;
    disabled: string;
    link: string;
    hint: string;
    error: string;
  }

  interface TypeAction {
    active: string;
    hover: string;
    hoverOpacity: number;
    selected: string;
    selectedOpacity: number;
    disabled: string;
    disabledOpacity: number;
    disabledBackground: string;
    focus: string;
    focusOpacity: number;
    activatedOpacity: number;
    topbar: {
      active: string;
      hover: string;
      selected: string;
    };
    sidebar: {
      active: string;
      hover: string;
      selected: string;
    };
  }

  interface Palette {
    // MUI built-ins + your extensions
    common: CommonColors;
    mode: PaletteMode;
    contrastThreshold: number;
    tonalOffset: PaletteTonalOffset;
    primary: PaletteColor;
    secondary: PaletteColor;
    error: PaletteColor;
    warning: PaletteColor;
    info: PaletteColor;
    success: PaletteColor;
    grey: Color;

    text: UxtTypeText;
    divider: TypeDivider;
    action: TypeAction;
    background: TypeBackground;

    ui: HexagonUIColors;
    status: HexagonStatusColors;
    branding: HexagonBrandingColors;

    getContrastText: (background: string) => string;
    augmentColor: (options: PaletteAugmentColorOptions) => PaletteColor;
  }

  interface PaletteOptions {
    primary?: PaletteColorOptions;
    secondary?: PaletteColorOptions;
    error?: PaletteColorOptions;
    warning?: PaletteColorOptions;
    info?: PaletteColorOptions;
    success?: PaletteColorOptions;
    mode?: PaletteMode;
    tonalOffset?: PaletteTonalOffset;
    contrastThreshold?: number;
    common?: Partial<CommonColors>;
    grey?: Partial<Color>;

    text?: Partial<UxtTypeText>;
    divider?: string;
    action?: Partial<TypeAction>;
    background?: Partial<TypeBackground>;

    ui?: HexagonUIColors;
    status?: HexagonStatusColors;
    branding?: HexagonBrandingColors;

    getContrastText?: (background: string) => string;
  }

  // ----- zIndex -----
  interface ZIndex {
    // MUI defaults
    mobileStepper: number;
    speedDial: number;
    appBar: number;
    drawer: number;
    snackbar: number;
    tooltip: number;
    fab: number;

    // UXT custom layers
    dropdownListPopup: number;
    dataTableColumnHeader: number;
    sidebar: number;
    overlay: number;
    filterPanel: number;
    topbar: number;
    detailsPanel: number;
    popup: number;
    dialog: number;
    modal: number;
    overflowButtonOverlay: number;
    tabsOverlay: number;
    overflowButtonPopup: number;
    tabsPopup: number;
    notificationPanel: number;
  }

  // ----- Component override registration for your custom keys -----
  interface ComponentNameToClassKey {
    UxtListItem: "root" | "selected" | "checkbox" | "icon" | "picture" | "action" | "actionOpen" | "singleLine" | "doubleLine" | "tripleLine" | "disabled";
    UxtNestedListItem: "root" | "selected" | "content" | "icon" | "text" | "chevron" | "childItems" | "childItem";
    UxtNestedListChildItem: "root" | "selected" | "text" | "parentHasIcon";
    UxtTreeItem: "root" | "selected" | "minWidth" | "checkbox" | "checkboxBox" | "checkboxCheck" | "chevron" | "collapsible" | "icon" | "text" | "action" | "actionOpen" | "overflow" | "treeItem" | "dropValid" | "dropInvalid" | "indent";
    UxtUserMenu: "root" | "header" | "items" | "text" | "userIcon" | "chevron";
    UxtUserMenuItem: "root";
    UxtIcon: "root";
    UxtIconButton: "root";
    UxtToggleIconButton: "root";
    UxtOverflowButton: "root" | "overflowButtonWrapper" | "overflowButtonOpen";
    UxtTopbarMenu: "root";
  }

  interface Components<Theme = unknown> {
    UxtListItem?: { styleOverrides?: ComponentsOverrides<Theme>["UxtListItem"] };
    UxtTreeItem?: { styleOverrides?: ComponentsOverrides<Theme>["UxtTreeItem"] };
    UxtNestedListChildItem?: {
      styleOverrides?: ComponentsOverrides<Theme>["UxtNestedListChildItem"];
    };
    UxtNestedListItem?: {
      styleOverrides?: ComponentsOverrides<Theme>["UxtNestedListItem"];
    };
    UxtUserMenuItem?: { styleOverrides?: ComponentsOverrides<Theme>["UxtUserMenuItem"] };
    UxtUserMenu?: { styleOverrides?: ComponentsOverrides<Theme>["UxtUserMenu"] };
    UxtIcon?: { styleOverrides?: ComponentsOverrides<Theme>["UxtIcon"] };
    UxtIconButton?: { styleOverrides?: ComponentsOverrides<Theme>["UxtIconButton"] };
    UxtToggleIconButton?: { styleOverrides?: ComponentsOverrides<Theme>["UxtToggleIconButton"] };
    UxtOverflowButton?: { styleOverrides?: ComponentsOverrides<Theme>["UxtOverflowButton"] };
    UxtTopbarMenu?: { styleOverrides?: ComponentsOverrides<Theme>["UxtTopbarMenu"] };
  }
}

export type GetThemeOptionsFunction = (baseThemeOptions: ThemeOptions) => ThemeOptions;

export default function createUxtTheme(getThemeOptions: GetThemeOptionsFunction): UxtTheme {
  const base: ThemeOptions = {
    breakpoints: {
      values: { xs: 0, sm: 768, md: 960, lg: 1280, xl: 1920 },
    },
    height: {
      button: 36,
      input: 40,
      item: 48,
      toolbar: 56,
      chip: 32,
    },
    mixins: {
      absoluteFill: {
        bottom: 0,
        left: 0,
        position: "absolute",
        right: 0,
        top: 0,
      },
      readableWidth: {
        maxWidth: 768,
        width: "100%",
      },
    },
    palette: {
      mode: "light",
      divider: theme.palette.ui.grey[200],
      background: {
        sidebar: theme.palette.background.sidebar,
        thumb: theme.palette.background.thumb,
        topbar: theme.palette.background.topbar,
        paper: theme.palette.background.paper,
        card: theme.palette.background.paper,
      },
      error: {
        light: theme.palette.status.red[300],
        main: theme.palette.status.red[500],
        dark: theme.palette.status.red[700],
        contrastText: theme.palette.common.white,
      },
      info: {
        light: theme.palette.ui.blue[300],
        main: theme.palette.ui.blue[500],
        dark: theme.palette.ui.blue[700],
        contrastText: theme.palette.common.white,
      },
      primary: {
        light: theme.palette.ui.blue[300],
        main: theme.palette.ui.blue[500],
        dark: theme.palette.ui.blue[700],
        contrastText: theme.palette.common.white,
      },
      secondary: {
        light: theme.palette.ui.blue[300],
        main: theme.palette.ui.blue[500],
        dark: theme.palette.ui.blue[700],
        contrastText: theme.palette.common.white,
      },
      success: {
        light: theme.palette.status.green[300],
        main: theme.palette.status.green[500],
        dark: theme.palette.status.green[700],
        contrastText: theme.palette.common.white,
      },
      warning: {
        light: theme.palette.status.yellow[300],
        main: theme.palette.status.yellow[500],
        dark: theme.palette.status.yellow[700],
        contrastText: theme.palette.common.white,
      },
      text: {
        primary: theme.palette.ui.black[500],
        secondary: theme.palette.ui.grey[500],
        link: theme.palette.ui.blue[500],
        hint: theme.palette.ui.black[300],
        error: theme.palette.status.red[500],
      },
      ui: { ...theme.palette.ui },
      status: { ...theme.palette.status },
      branding: { ...theme.palette.branding },
      action: {
        topbar: {
          active: theme.palette.ui.blue[900],
          selected: theme.palette.ui.blue[800],
          hover: alpha(theme.palette.ui.blue[900], 0.3),
        },
        sidebar: {
          hover: theme.palette.action.sidebar.hover,
          active: theme.palette.action.sidebar.active,
          selected: theme.palette.action.sidebar.selected,
        },
      },
    },
    shape: { borderRadius: 2 },
    shadows: [
      "none",
      "0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.20)",
      "0px 1px 5px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.20)",
      "0px 1px 8px rgba(0, 0, 0, 0.12), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 3px 3px rgba(0, 0, 0, 0.20)",
      "0px 2px 4px rgba(0, 0, 0, 0.12), 0px 3px 6px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.20)",
      "0px 3px 5px rgba(0, 0, 0, 0.12), 0px 5px 8px rgba(0, 0, 0, 0.14), 0px 1px 14px rgba(0, 0, 0, 0.20)",
      "0px 3px 5px rgba(0, 0, 0, 0.12), 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.20)",
      "0px 4px 5px rgba(0, 0, 0, 0.12), 0px 7px 10px rgba(0, 0, 0, 0.14), 0px 1px 20px rgba(0, 0, 0, 0.20)",
      "0px 5px 5px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 1px 22px rgba(0, 0, 0, 0.20)",
      "0px 5px 6px rgba(0, 0, 0, 0.12), 0px 9px 12px rgba(0, 0, 0, 0.14), 0px 1px 24px rgba(0, 0, 0, 0.20)",
      "0px 6px 6px rgba(0, 0, 0, 0.12), 0px 10px 14px rgba(0, 0, 0, 0.14), 0px 1px 26px rgba(0, 0, 0, 0.20)",
      "0px 6px 7px rgba(0, 0, 0, 0.12), 0px 11px 15px rgba(0, 0, 0, 0.14), 0px 1px 28px rgba(0, 0, 0, 0.20)",
      "0px 7px 8px rgba(0, 0, 0, 0.12), 0px 12px 17px rgba(0, 0, 0, 0.14), 0px 2px 31px rgba(0, 0, 0, 0.20)",
      "0px 7px 8px rgba(0, 0, 0, 0.12), 0px 13px 19px rgba(0, 0, 0, 0.14), 0px 2px 33px rgba(0, 0, 0, 0.20)",
      "0px 7px 9px rgba(0, 0, 0, 0.12), 0px 14px 21px rgba(0, 0, 0, 0.14), 0px 2px 35px rgba(0, 0, 0, 0.20)",
      "0px 8px 9px rgba(0, 0, 0, 0.12), 0px 15px 22px rgba(0, 0, 0, 0.14), 0px 2px 37px rgba(0, 0, 0, 0.20)",
      "0px 8px 10px rgba(0, 0, 0, 0.12), 0px 16px 24px rgba(0, 0, 0, 0.14), 0px 2px 40px rgba(0, 0, 0, 0.20)",
      "0px 8px 11px rgba(0, 0, 0, 0.12), 0px 17px 26px rgba(0, 0, 0, 0.14), 0px 2px 42px rgba(0, 0, 0, 0.20)",
      "0px 9px 11px rgba(0, 0, 0, 0.12), 0px 18px 28px rgba(0, 0, 0, 0.14), 0px 2px 44px rgba(0, 0, 0, 0.20)",
      "0px 9px 12px rgba(0, 0, 0, 0.12), 0px 19px 29px rgba(0, 0, 0, 0.14), 0px 2px 46px rgba(0, 0, 0, 0.20)",
      "0px 10px 13px rgba(0, 0, 0, 0.12), 0px 20px 31px rgba(0, 0, 0, 0.14), 0px 2px 49px rgba(0, 0, 0, 0.20)",
      "0px 10px 13px rgba(0, 0, 0, 0.12), 0px 21px 33px rgba(0, 0, 0, 0.14), 0px 3px 51px rgba(0, 0, 0, 0.20)",
      "0px 10px 14px rgba(0, 0, 0, 0.12), 0px 22px 35px rgba(0, 0, 0, 0.14), 0px 3px 53px rgba(0, 0, 0, 0.20)",
      "0px 11px 14px rgba(0, 0, 0, 0.12), 0px 23px 36px rgba(0, 0, 0, 0.14), 0px 3px 55px rgba(0, 0, 0, 0.20)",
      "0px 11px 15px rgba(0, 0, 0, 0.12), 0px 24px 38px rgba(0, 0, 0, 0.14), 0px 9px 46px rgba(0, 0, 0, 0.20)",
    ],
    zIndex: {
      dropdownListPopup: 50,
      dataTableColumnHeader: 100,
      sidebar: 200,
      overlay: 250,
      filterPanel: 300,
      topbar: 300,
      detailsPanel: 350,
      popup: 400,
      dialog: 400,
      modal: 400,
      overflowButtonOverlay: 400,
      tabsOverlay: 400,
      overflowButtonPopup: 400,
      tabsPopup: 400,
      notificationPanel: 450,
    },
    typography: {
      ...theme.typography,
      button: { lineHeight: "normal" },
    },
  };

  return createTheme(deepmerge(base, getThemeOptions(base))) as UxtTheme;
}
