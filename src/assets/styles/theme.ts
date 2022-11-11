import { extendTheme } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';
import { ButtonStyles as Button } from './components/buttonStyles';
import { BodyStyles as Styles } from './components/bodyStyles';

/* Pallete 1 */
const black = '#000000';
const platinum = '#e66868';
const silver = '#bfbfbf';
const manatee = '#96939b';
const dodgerBlue = '#1e90ff';
const mangoTango = '#fc814a';
const venetianRed = '#C90612ff';

export const myNewTheme = extendTheme({
  /* deprecated */
  styles: {
    global: {
      body: {
        bg: mode('red', 'pink'),
      },
    },
  },
  fonts: {
    heading: "'Open Sans', sans-serif",
    body: "'montserrat', sans-serif",
  },
  colors: {
    primary: dodgerBlue,
    secondary: manatee,
    tertiary: silver,
    highlight: platinum,
    warning: mangoTango,
    danger: venetianRed,
    darken: black,
  },
  components: {
    Button,
    Styles,
  },
});
