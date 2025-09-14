import deepmerge from 'deepmerge';
import type { Theme } from '@mui/system';
import type UxtTheme from '../UxtTheme';

const createUxtTheme = <T extends Partial<UxtTheme>>(customizedTheme: T, theme: Theme): T => {
  return deepmerge(customizedTheme, theme) as T;
};

export default createUxtTheme;
