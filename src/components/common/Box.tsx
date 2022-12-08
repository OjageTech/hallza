import { Box as ChakraBox, useStyleConfig } from '@chakra-ui/react';

function Box(props: any) {
  const { variant, ...rest } = props;

  const styles = useStyleConfig('Box', { variant });

  // Pass the computed styles into the `__css` prop
  return <ChakraBox __css={styles} {...rest} />;
}

export default Box;
