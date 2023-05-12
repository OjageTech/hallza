import { mode, whiten, darken } from '@chakra-ui/theme-tools';
import { defineStyleConfig } from '@chakra-ui/react';

export const Input = defineStyleConfig({
  // The styles all Boxes have in common
  baseStyle: (props: any) => ({
    borderRadius: 'xl',
    color: 'red',
    bg: mode(whiten('#F9FAFB', 0), darken('black', 0))(props),
  }),
  variants: {
    base: () => ({
      h: '98px',
    }),

    styled: (props: any) => ({
      h: '98px',
      _focus: {
        boxShadow: 'outline',
        borderColor: 'blue.500',
        bg: mode(darken('#F9FAFB', 0), whiten('black', 0))(props),
      },
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      bg: mode(darken('#F9FAFB', 0), whiten('black', 0))(props),
    }),
  },
  // The default variant value
  defaultProps: {
    variant: 'base',
  },
});
