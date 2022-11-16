import { Box, Text } from '@chakra-ui/react';

export const RightSidebar = () => (
  <Box w="30vw" pl="1rem" border="1px dashed red">
    <Text
      pl="1rem"
      textAlign="left"
      fontStyle="normal"
      fontWeight={600}
      fontSize="16px"
      lineHeight="18px"
    >
      Recent Referrals
    </Text>
  </Box>
);
