import { HStack, Text, VStack } from '@chakra-ui/react';
import { CurrencyBadge } from './CurrencyBadge';

export const WalletBalance = () => (
  <HStack pr="6rem">
    <VStack alignItems="flex-start" gap="13px">
      <Text fontWeight={500} fontSize="14px" color="secondary">
        Wallet Balance
      </Text>
      <Text fontWeight={600} fontSize="30px">
        2,000,134
      </Text>
      <Text fontWeight={500} fontSize="14px" color="secondary">
        2,421411
      </Text>
    </VStack>
    <CurrencyBadge currency="NGN" />
  </HStack>
);
