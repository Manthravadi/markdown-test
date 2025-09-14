import { transparentize } from "polished";
import createUxtTheme from "./_internal/base";
import type { SimplePaletteColorOptions } from "@mui/material/styles";

export default createUxtTheme((baseTheme) => ({
  palette: {
    mode: "dark",
    action: {
      hover: transparentize(0.92, baseTheme.palette.ui.white[50]),
      active: transparentize(0.86, baseTheme.palette.ui.white[50]),
      selected: transparentize(0.88, baseTheme.palette.ui.white[50]),

      sidebar: {
        hover: baseTheme.palette.action.sidebar.hover,
        active: baseTheme.palette.action.sidebar.active,
        selected: baseTheme.palette.action.sidebar.selected,
      },
    },
    background: {
      default: baseTheme.palette.ui.black[600],
      paper: baseTheme.palette.ui.black[700],
      topbar: (baseTheme.palette.primary as SimplePaletteColorOptions).main,
      sidebar: baseTheme.palette.ui.black[600],
      thumb: baseTheme.palette.ui.white[400],
      track: baseTheme.palette.ui.black[400],
      card: baseTheme.palette.ui.black[600],
      icon: baseTheme.palette.ui.white[700],
    },
    primary: {
      main: baseTheme.palette.ui.blue[400],
    },
    divider: baseTheme.palette.ui.grey[500],
    text: {
      primary: baseTheme.palette.ui.white[500],
      secondary: baseTheme.palette.ui.grey[300],
      hint: baseTheme.palette.ui.white[900],
      link: (baseTheme.palette.primary as SimplePaletteColorOptions).light,
      error: baseTheme.palette.status.red[300],
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          background: baseTheme.palette.ui.black[600],
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
          color: baseTheme.palette.ui.white[500],
          fill: baseTheme.palette.ui.white[700],
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
          backgroundColor: "inherit",
          border: `1px solid ${baseTheme.palette.primary["main"]}`,
          "&:hover": {
            backgroundColor: baseTheme.palette.action.hover,
          },
          [`&.Mui-selected`]: {
            backgroundColor: baseTheme.palette.primary["main"],
            border: "none",
          },
          [`&:not(.Mui-selected)`]: {
            backgroundColor: "inherit",
            border: `1px solid ${baseTheme.palette.primary["main"]}`,
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
            fill: baseTheme.palette.background["icon"],
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#fff !important",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          [`&:hover . MuiOutlinedInput-notchedOutline`]: {
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
