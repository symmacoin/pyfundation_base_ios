/**
 * @ Author: Ing. Marcelo Anjos
 * @ Create Time: 2022-02-08 21:06:04
 * @ Modified by: Your name
 * @ Modified time: 2022-02-10 18:46:21
 * @ Description:
 */

import { theme } from './src/shared/theme/themes';

declare module '@react-navigation/native' {
  export type ExtendedTheme = typeof theme;
  export function useTheme(): ExtendedTheme;
}
