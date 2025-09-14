import React from 'react';
import topbarTheme from './topbar';
import sidebarTheme from './sidebar';
import lightTheme from './light';
import darkTheme from './dark';
import type UxtTheme from './UxtTheme';
import { ThemeProvider } from '@mui/material';

export type UxtThemeContextType = {
  topbarTheme?: Partial<UxtTheme>;
  sidebarTheme?: Partial<UxtTheme>;
  contentTheme?: Partial<UxtTheme>;
};

export interface UxtThemeProviderProps {
  children?: React.ReactNode;
  topbarTheme?: Partial<UxtTheme>;
  sidebarTheme?: Partial<UxtTheme>;
  contentTheme?: Partial<UxtTheme>;
}

export const UxtThemeContext = React.createContext<UxtThemeContextType>({
  topbarTheme: topbarTheme(darkTheme),
  sidebarTheme: sidebarTheme(darkTheme),
  contentTheme: lightTheme,
});

const UxtThemeProvider = (props: UxtThemeProviderProps) => {
  const {
    children,
    topbarTheme,
    sidebarTheme,
    contentTheme: contentThemeProp,
  } = props;

  const contentTheme = React.useMemo(() => {
    // We may choose to merge it in future with outer themes to make nested themes
    return contentThemeProp;
  }, [contentThemeProp]);

  return (
    <UxtThemeContext.Provider
      value={{
        contentTheme,
        sidebarTheme,
        topbarTheme,
      }}
    >
      <ThemeProvider theme={contentTheme}>{children}</ThemeProvider>
    </UxtThemeContext.Provider>
  );
};

export default UxtThemeProvider;
