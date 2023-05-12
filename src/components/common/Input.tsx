import { Input as ChakraInput, useStyleConfig } from '@chakra-ui/react';

function Input(props: any) {
  const { variant, ...rest } = props;

  const styles = useStyleConfig('Input', { variant });

  // Pass the computed styles into the `__css` prop
  return <ChakraInput __css={styles} {...rest} />;
}

export default Input;
