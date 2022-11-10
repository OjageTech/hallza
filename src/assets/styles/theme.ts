import { extendTheme } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';
import { ButtonStyles as Button } from './components/buttonStyles';
import { BodyStyles as Styles } from './components/bodyStyles';

/* CSS HEX */
const lilacLuster = '#005FFF';
const black = '#000000';
const lightDark = '#121318';
const navyBlue = '#61DAFB';
const darkSlateBlue = '#373976ff';
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
  //
  fonts: {
    heading: "'Open Sans', sans-serif",
    body: "'montserrat', sans-serif",
  },
  colors: {
    primary: navyBlue,
    secondary: lilacLuster,
    tertiary: lightDark,
    highlight: darkSlateBlue,
    warning: venetianRed,
    danger: venetianRed,
    darken: black,
  },
  components: {
    Button,
    Styles,
  },
});

// /* CSS HSL */
// --lilac-luster: hsla(318, 13%, 65%, 1);
// --black: hsla(0, 0%, 0%, 1);
// --navy-blue: hsla(239, 96%, 22%, 1);
// --dark-slate-blue: hsla(238, 36%, 34%, 1);
// --venetian-red: hsla(356, 94%, 41%, 1);

// /* SCSS HEX */
// $lilac-luster: #B29AABff;
// $black: #000000ff;
// $navy-blue: #020370ff;
// $dark-slate-blue: #373976ff;
// $venetian-red: #C90612ff;

// /* SCSS HSL */
// $lilac-luster: hsla(318, 13%, 65%, 1);
// $black: hsla(0, 0%, 0%, 1);
// $navy-blue: hsla(239, 96%, 22%, 1);
// $dark-slate-blue: hsla(238, 36%, 34%, 1);
// $venetian-red: hsla(356, 94%, 41%, 1);

// /* SCSS RGB */
// $lilac-luster: rgba(178, 154, 171, 1);
// $black: rgba(0, 0, 0, 1);
// $navy-blue: rgba(2, 3, 112, 1);
// $dark-slate-blue: rgba(55, 57, 118, 1);
// $venetian-red: rgba(201, 6, 18, 1);

// /* SCSS Gradient */
// $gradient-top: linear-gradient(0deg, #B29AABff, #000000ff, #020370ff, #373976ff, #C90612ff);
// $gradient-right: linear-gradient(90deg, #B29AABff, #000000ff, #020370ff, #373976ff, #C90612ff);
// $gradient-bottom: linear-gradient(180deg, #B29AABff, #000000ff, #020370ff, #373976ff, #C90612ff);
// $gradient-left: linear-gradient(270deg, #B29AABff, #000000ff, #020370ff, #373976ff, #C90612ff);
// $gradient-top-right: linear-gradient(45deg, #B29AABff, #000000ff, #020370ff, #373976ff, #C90612ff);
// $gradient-bottom-right: linear-gradient(135deg, #B29AABff, #000000ff, #020370ff, #373976ff, #C90612ff);
// $gradient-top-left: linear-gradient(225deg, #B29AABff, #000000ff, #020370ff, #373976ff, #C90612ff);
// $gradient-bottom-left: linear-gradient(315deg, #B29AABff, #000000ff, #020370ff, #373976ff, #C90612ff);
// $gradient-radial: radial-gradient(#B29AABff, #000000ff, #020370ff, #373976ff, #C90612ff);
