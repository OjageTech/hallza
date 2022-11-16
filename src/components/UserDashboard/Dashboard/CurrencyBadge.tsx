import { Flex } from '@chakra-ui/react';

type CurrencyBadge = {
	currency: string;
};
export function CurrencyBadge({ currency }: CurrencyBadge) {
  return (
    <Flex
      borderRadius="5px"
      fontWeight="500"
      fontSize="12px"
      textAlign="center"
      alignItems="center"
      justifyContent="center"
      w="49px"
      h="23px"
      color="black"
      bg="#5CF77E"
    >
      {currency}
    </Flex>
  );
}
