import { Grid as ChakraGrid, useStyleConfig } from '@chakra-ui/react';

function HeaderGrid(props: any) {
  const { variant, ...rest } = props;

  const styles = useStyleConfig('Grid', { variant });

  // Pass the computed styles into the `__css` prop
  return <ChakraGrid __css={styles} {...rest} />;
}

export default HeaderGrid;
