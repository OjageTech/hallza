import { mode, whiten, darken } from '@chakra-ui/theme-tools';
import { defineStyleConfig } from '@chakra-ui/react';

export const Grid = defineStyleConfig({
  // The styles all Boxes have in common
  baseStyle: (props: any) => ({
    borderRadius: 'sm',
    bg: mode(whiten('#F9FAFB', 0), darken('black', 0))(props),
  }),
  // Two variants: rounded and nav
  variants: {
    base: () => ({

    }),

    rounded: (props: any) => ({
      padding: 0,
      borderRadius: 'xl',
      boxShadow: 'xl',
      bg: mode(darken('#F9FAFB', 0), whiten('black', 0))(props),
    }),
    activeItem: () => ({
      color: '#F9FAFB',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(5px)',
      bgGradient: 'linear(-273.78deg,darken 2.4%, danger 27.63%, primary 102.85%)',
    }),
    navItem: (props: any) => ({
      color: '#F9FAFB',
      // make a transpaarent background
      bg: mode(
        darken('primary', 0),
        whiten('rgb(18, 18, 18)', 0),
      )(props),

    }),
    nav: (props: any) => ({
      color: mode(whiten('black', 10), darken('#F9FAFB', 0))(props),
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(5px)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      bg: mode(
        darken('rgba(255, 255, 255, 0.2)', 0),
        whiten('rgb(18, 18, 18)', 0),
      )(props),
    }),
    sideNav: (props: any) => ({
      borderRadius: 'xl',
      color: mode(whiten('black', 10), darken('#F9FAFB', 0))(props),
      boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
      bg: mode(
        darken('primary', 0),
        whiten('rgb(18, 18, 18)', 0),
      )(props),
    }),
  },
  // The default variant value
  defaultProps: {
    variant: 'base',
  },
});
