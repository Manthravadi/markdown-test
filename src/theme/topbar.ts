import deepmerge from 'deepmerge';
import lightTheme from './light';
import type UxtTheme from './UxtTheme';

const stateStyles = {
  color: lightTheme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: lightTheme.palette.action.topbar.hover,
  },
  '&:active': {
    backgroundColor: lightTheme.palette.ui.blue[800],
  },
};

const themeToMerge: Partial<UxtTheme> = {
  palette: {
    action: {
      ...lightTheme.palette.action,
      selected: lightTheme.palette.action.topbar.selected,
      hover: lightTheme.palette.action.topbar.hover,
      active: lightTheme.palette.action.topbar.active,
    },
  } as UxtTheme['palette'],
  components: {
    UxtIcon: {
      styleOverrides: {
        root: { ...stateStyles, borderRadius: '50%' },
      },
    },
    UxtIconButton: {
      styleOverrides: {
        root: { ...stateStyles, borderRadius: '50%' },
      },
    },
    UxtToggleIconButton: {
      styleOverrides: {
        root: stateStyles,
      },
    },
    UxtOverflowButton: {
      styleOverrides: {
        root: stateStyles,
        overflowButtonWrapper: {
          backgroundColor: lightTheme.palette.ui.blue[800],
        },
        overflowButtonOpen: {
          backgroundColor: lightTheme.palette.ui.blue[800],
        },
      },
    },
    UxtTopbarMenu: {
      styleOverrides: {
        root: stateStyles,
      },
    },
  },
};

export default (
  themeToExtend: UxtTheme,
  classes: Record<string, unknown> = null,
) => deepmerge(themeToExtend, themeToMerge) as UxtTheme;
