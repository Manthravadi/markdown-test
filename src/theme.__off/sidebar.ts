import deepmerge from 'deepmerge';
import { Theme } from '@mui/material/styles';
import darkTheme from './dark';
import type UxtTheme from './UxtTheme';

const selectedStyles = {
  '&::after': {
    backgroundColor: darkTheme.palette.background.topbar,
    bottom: 0,
    content: '""',
    display: 'block',
    left: 0,
    position: 'absolute',
    top: 0,
    width: 4,
  },
  '&:hover::after': {
    backgroundColor: darkTheme.palette.background.topbar,
    bottom: 0,
    content: '""',
    display: 'block',
    left: 0,
    position: 'absolute',
    top: 0,
    width: 4,
  },
};

const themeToMerge: Partial<Theme> = {
  components: {
    UxtListItem: {
      styleOverrides: {
        selected: selectedStyles,
      },
    },
    UxtTreeItem: {
      styleOverrides: {
        selected: selectedStyles,
      },
    },
    UxtNestedListChildItem: {
      styleOverrides: {
        selected: selectedStyles,
      },
    },
    UxtNestedListItem: {
      styleOverrides: {
        selected: selectedStyles,
      },
    },
    UxtUserMenu: {
      styleOverrides: {
        header: {
          borderBottomColor: darkTheme.palette.divider,
        },
        items: {
          boxShadow: `0 -1px 0 ${darkTheme.palette.divider} inset`,
        },
      },
    },
    UxtUserMenuItem: {
      styleOverrides: {},
    },
  },
};

export default (
  themeToExtend: Partial<UxtTheme>,
  classes: Record<string, unknown> = null,
) => deepmerge(themeToExtend, themeToMerge) as UxtTheme;
