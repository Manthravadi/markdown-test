import React from 'react';
import type { Mixins } from '@mui/material/styles';
import type { Theme, ThemeOptions } from '@mui/material/styles';
import type {
  Palette,
  PaletteOptions,
  TypeBackground,
  TypeText,
  TypeAction,
  PaletteColor,
} from '@mui/material/styles';
import type { ZIndex } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

export interface UxtMixins extends Mixins {
  absoluteFill: {
    bottom: number;
    left: number;
    position: React.CSSProperties['position'];
    right: number;
    top: number;
  };
  readableWidth: {
    maxWidth: React.CSSProperties['maxWidth'];
    width: React.CSSProperties['width'];
  };
}

export interface UxtTypeBackground extends TypeBackground {
  sidebar?: string;
  thumb?: string;
  topbar?: string;
  card?: string;
  icon?: string;
  track?: string;
}

export interface HexagonColorKeys {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface HexagonColors {
  ui: {
    black: HexagonColorKeys;
    white: HexagonColorKeys;
    blue: HexagonColorKeys;
    grey: HexagonColorKeys;
  };
  status: {
    red: HexagonColorKeys;
    orange: HexagonColorKeys;
    yellow: HexagonColorKeys;
    green: HexagonColorKeys;
    lightBlue: HexagonColorKeys;
    purple: HexagonColorKeys;
  };
  branding: {
    electricBlue: HexagonColorKeys;
    skyBlue: HexagonColorKeys;
    teal: HexagonColorKeys;
    oceanGreen: HexagonColorKeys;
    emerald: HexagonColorKeys;
    lime: HexagonColorKeys;
    honey: HexagonColorKeys;
    cantaloupe: HexagonColorKeys;
    rose: HexagonColorKeys;
    ruby: HexagonColorKeys;
  };
}

export interface HexagonUIColors {
  black: HexagonColorKeys;
  white: HexagonColorKeys;
  blue: HexagonColorKeys;
  grey: HexagonColorKeys;
}

export interface HexagonStatusColors {
  red: HexagonColorKeys;
  orange: HexagonColorKeys;
  yellow: HexagonColorKeys;
  green: HexagonColorKeys;
  lightBlue: HexagonColorKeys;
  purple: HexagonColorKeys;
}

export interface HexagonBrandingColors {
  electricBlue: HexagonColorKeys;
  skyBlue: HexagonColorKeys;
  teal: HexagonColorKeys;
  oceanGreen: HexagonColorKeys;
  emerald: HexagonColorKeys;
  lime: HexagonColorKeys;
  honey: HexagonColorKeys;
  cantaloupe: HexagonColorKeys;
  rose: HexagonColorKeys;
  ruby: HexagonColorKeys;
}

export interface UxtHeight {
  button: number;
  input: number;
  item: number;
  toolbar: number;
  chip: number;
}

export interface UxtTypeText extends TypeText {
  hint: string;
  link: string;
  error: string;
}

export interface UxtTypeAction extends TypeAction {
  topbar: {
    selected: string;
    hover: string;
    active: string;
  };
  sidebar: {
    selected: string;
    hover: string;
    active: string;
  };
}

export interface UxtZIndex extends Omit<ZIndex, 'modal'> {
  mobileStepper: number;
  speedDial: number;
  appBar: number;
  drawer: number;
  snackbar: number;
  tooltip: number;
  fab: number;

  dropdownListPopup: number;
  dataTableColumnHeader: number;
  sidebar: number;
  overlay: number;
  filterPanel: number;
  topbar: number;
  detailsPanel: number;
  popup: number;
  dialog: number;
  modal: number; // TODO: issue with ZIndex not being string|number in @mui's ZIndex interface
  overflowButtonOverlay: number;
  tabsOverlay: number;
  overflowButtonPopup: number;
  tabsPopup: number;
  notificationPanel: number;
}

export interface UxtPalette extends Palette {
  background: UxtTypeBackground;
  text: UxtTypeText;
  ui: HexagonUIColors;
  status: HexagonStatusColors;
  branding: HexagonBrandingColors;
  type?: PaletteMode;
  action: UxtTypeAction;
}

export default interface UxtTheme extends Theme {
  height: UxtHeight;
  mixins: UxtMixins;
  palette: UxtPalette;
  zIndex: UxtZIndex;
}
