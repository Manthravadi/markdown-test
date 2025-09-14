// src/uxt-theme/_internal/useTheme.ts  (place it where your makeStyles imports './useTheme')
import { useTheme as useMuiTheme } from "@mui/material/styles";
import type UxtTheme from "../theme/UxtTheme";
export default function useTheme(): UxtTheme {
  return useMuiTheme() as UxtTheme;
}
