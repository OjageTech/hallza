import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

export const BodyStyles = {
  global: (props: StyleFunctionProps | Record<string, any>) => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('#aaa', '#ffaabb')(props),
    },
  }),
};
