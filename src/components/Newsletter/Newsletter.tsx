import {
  Box, Text, Input, Button, Flex, Center,
} from '@chakra-ui/react';

const Newsletter = () => (
  <Center>
    <Box textAlign="center">
      <Text fontSize="22px" fontWeight={600}>Save time, save money!</Text>
      <Text fontWeight={500}>Sign up and we'll send the best deals to you</Text>
      <br />
      <Flex w="39vw" gap="5px">
        <Input h="5vh" placeholder="Your email address" />
        <Button h="5vh" variant="primary">Subscribe</Button>
      </Flex>
    </Box>
  </Center>
);

export default Newsletter;
