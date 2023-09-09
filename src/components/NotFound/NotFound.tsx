'use client';

import { Link } from 'react-router-dom';
import {
  Box, Heading, Text, Button, Image,
} from '@chakra-ui/react';
import noData from '../../assets/images/no_data.svg';

export default function NotFound() {
  return (
    <Box m="0 auto" textAlign="center" py={10} px={6}>
      <Box h="20%">
        <Image
          h="100%"
          w="100%"
          src={noData}
          alt="No Item found matching criteria"
        />
      </Box>
      <Text fontSize="18px" mt={3} mb={2}>
        Venue Not Found
      </Text>
      <Text color="gray.500" mb={6}>
        The venue you&apos;re looking for is not available.
      </Text>

      <Button
        colorScheme="teal"
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        color="white"
        variant="solid"
        as={Link}
        to="/find"
      >
        Browse more
      </Button>
    </Box>
  );
}
