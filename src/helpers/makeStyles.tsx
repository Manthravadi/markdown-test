import { createMakeStyles } from "tss-react";
import useTheme from "../hooks/useTheme";
import type UxtTheme from "../theme/UxtTheme";

const { makeStyles } = createMakeStyles<UxtTheme>({
  useTheme: useTheme as (...args: Array<unknown>) => UxtTheme,
});

export default makeStyles;
