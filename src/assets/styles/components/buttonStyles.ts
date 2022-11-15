import { mode, whiten, darken } from '@chakra-ui/theme-tools';

export const ButtonStyles = {
  //  style the base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: (props: any) => ({
      bg: 'primary',
      color: 'white',
      _hover: {
        bg: mode(darken('primary', 20), whiten('primary', 20))(props),
        boxShadow: 'md',
      },
    }),
    primaryOutline: (props: any) => ({
      bg: 'transparent',
      border: '1px solid',
      color: 'primary',
      _hover: {
        transform: 'scale(1.02)',
        border: '1px solid',
        boxShadow: 'md',
      },
    }),
    secondary: (props: any) => ({
      bg: 'secondary',
      color: 'white',
      _hover: {
        bg: mode(darken('secondary', 20), whiten('secondary', 20))(props),
        boxShadow: 'md',
      },
    }),
    tertiary: (props: any) => ({
      bg: 'transparent',
      border: '1px solid #FFFFFF',
      color: '#FFFFFF',
      textTransform: 'uppercase',
      _hover: {
        transform: 'scale(1.02)',
        padding: '3px',
        border: '1px solid',
        boxShadow: 'md',
      },
    }),
  },

  //  default values for `size` and `variant`
  defaultProps: {},
};
