import type { SimplePaletteColorOptions } from "@mui/material/styles";
import { transparentize } from "polished";
import createUxtTheme from "./_internal/base";
import UxtTheme from "./UxtTheme";
import { alpha } from "@mui/material";

export default createUxtTheme((baseTheme: UxtTheme) => ({
  palette: {
    action: {
      selected: baseTheme.palette.ui.blue[100],
      hover: transparentize(0.96, baseTheme.palette.ui.black[900]),
      active: transparentize(0.84, baseTheme.palette.ui.black[900]),
    },
    background: {
      default: baseTheme.palette.ui.white[200],
      //   default: alpha("#D1DDE6", 0.2),
      topbar: baseTheme.palette.ui.blue[500],
      thumb: baseTheme.palette.ui.grey[400],
      icon: baseTheme.palette.ui.grey[500],
      track: baseTheme.palette.ui.white[500],
      card: baseTheme.palette.ui.white[50],
      paper: baseTheme.palette.ui.white[50],
      sidebar: baseTheme.palette.ui.grey[50],
    },
    text: {
      link: (baseTheme.palette.primary as SimplePaletteColorOptions).main,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          background: baseTheme.palette.background.paper,
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: "inherit",
        },
      },
    },
    MuiDatePickerToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: (baseTheme.palette.primary as SimplePaletteColorOptions).main,
          color: baseTheme.palette.text.primary,
          fill: baseTheme.palette.background.thumb,
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          backgroundColor: "inherit",
          "&:hover": {
            backgroundColor: baseTheme.palette.action.hover,
          },
          [`&:not(.Mui-selected)`]: {
            "&:hover": {
              backgroundColor: baseTheme.palette.action.hover,
            },
          },
        },
        today: {
          backgroundColor: baseTheme.palette.background.paper,
          border: `1px solid ${baseTheme.palette.primary.main}`,
          "&:hover": {
            backgroundColor: baseTheme.palette.action.hover,
          },
          [`&.Mui-selected`]: {
            backgroundColor: baseTheme.palette.primary.main,
            border: "none",
          },
          [`&:not(.Mui-selected)`]: {
            backgroundColor: "inherit",
            border: `1px solid ${baseTheme.palette.primary.main}`,
            "&:hover": {
              backgroundColor: baseTheme.palette.action.hover,
            },
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 2,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          [`& svg`]: {
            fill: baseTheme.palette.background.icon,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: `${baseTheme.palette.text.primary} !important`,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          [`&:hover .MuiOutlinedInput-notchedOutline`]: {
            borderColor: baseTheme.palette.text.link,
          },
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          "& :first-of-type": {
            color: "inherit",
          },
        },
      },
    },
  },
}));
