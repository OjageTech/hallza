import { useStyleConfig, Container } from '@chakra-ui/react';

function Card(props: any) {
  const { variant, ...rest } = props;

  const styles = useStyleConfig('Card', { variant });

  // Pass the computed styles into the `__css` prop
  return <Container __css={styles} {...rest} />;
}

export default Card;
