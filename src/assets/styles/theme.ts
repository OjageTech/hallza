import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import {
  mode,
  StyleFunctionProps,
} from '@chakra-ui/theme-tools';

import { ButtonStyles as Button } from './components/buttonStyles';
import { BodyStyles as Styles } from './components/bodyStyles';
import { Card } from './components/cardStyles';
import { Box } from './components/boxStyles';
import { Grid } from './components/gridStyles';

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
};
/* Pallete 1 */
const black = '#000000';

const lightDark = '#121318';

// const white = '#ffffff';
const whitish = '#F9FAFB';
const platinum = '#e66868';
const silver = '#bfbfbf';
// const manatee = '#96939b';
// const dodgerBlue = '#1e90ff';
const mangoTango = '#fc814a';
const myTeal = '#14b8a6';
const myPurple = '#8b5cf6';
const venetianRed = '#C90612ff';
const background = { _light: whitish, _dark: black };

// const config: ThemeConfig = {
//   initialColorMode: 'light',
//   useSystemColorMode: false,
// };

export const myNewTheme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: 'default',
        bg: mode(background._light, background._dark)(props),
      },
    }),
  },
  fonts: {
    heading: "'Open Sans', sans-serif",
    body: "'montserrat', sans-serif",
  },
  colors: {
    primary: myTeal,
    secondary: myPurple,
    tertiary: silver,
    cardColor: lightDark,
    highlight: platinum,
    warning: mangoTango,
    danger: venetianRed,
    darken: black,
  },
  breakpoints,
  components: {
    Button,
    Styles,
    Card,
    Box,
    Grid,
  },
});
