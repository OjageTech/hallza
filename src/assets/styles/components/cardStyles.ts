import { mode, whiten, darken } from '@chakra-ui/theme-tools';
import { defineStyleConfig } from '@chakra-ui/react';

export const Card = defineStyleConfig({
    // The styles all Cards have in common
    baseStyle: {
      display: 'flex',
      flexDirection: 'column',
      background: 'white',
      alignItems: 'center',
      gap: 6,
    },
    // Two variants: rounded and smooth
    variants: {
      rounded: (props: any) => ({
        padding: 8,
        borderRadius: 'xl',
        boxShadow: 'xl',
        bg: mode(darken('primary', 20), whiten('secondary', 20))(props),
      }),
      smooth: {
        padding: 6,
        borderRadius: 'base',
        boxShadow: 'md',
      },
    },
    // The default variant value
    defaultProps: {
      variant: 'smooth',
    },
  })