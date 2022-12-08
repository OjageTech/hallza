import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import {
  mode, whiten, darken, StyleFunctionProps,
} from '@chakra-ui/theme-tools';

import { ButtonStyles as Button } from './components/buttonStyles';
import { BodyStyles as Styles } from './components/bodyStyles';
import { Card } from './components/cardStyles';
import { Box } from './components/boxStyles';

/* Pallete 1 */
const black = '#000000';

const lightDark = '#121318';

const white = '#ffffff';
const platinum = '#e66868';
const silver = '#bfbfbf';
const manatee = '#96939b';
const dodgerBlue = '#1e90ff';
const mangoTango = '#fc814a';

const venetianRed = '#C90612ff';
const background = { _light: white, _dark: black };

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

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
    primary: dodgerBlue,
    secondary: manatee,
    tertiary: silver,
    cardColor: lightDark,
    highlight: platinum,
    warning: mangoTango,
    danger: venetianRed,
    darken: black,
  },

  components: {
    Button,
    Styles,
    Card,
    Box,
  },
});
