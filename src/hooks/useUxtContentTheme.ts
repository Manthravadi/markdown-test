import React from "react";
import { UxtThemeContext } from "../theme/UxtThemeProvider";
import useTheme from "./useTheme";
import type { UxtThemeContextType } from "../theme/UxtThemeProvider";

const useUxtContentTheme = () => {
  const { contentTheme } = React.useContext<UxtThemeContextType>(UxtThemeContext);
  return contentTheme || useTheme();
};

export default useUxtContentTheme;
