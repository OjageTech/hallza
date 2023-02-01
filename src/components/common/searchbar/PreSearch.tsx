import React, { useState } from 'react';
import {
  Center, Button, Container, Text, Grid, Box,
} from '@chakra-ui/react';

const PreSearch = () => (
  <Center>
    <Box w="60vw" fontWeight={200} textAlign="center">
      <Text role="heading" fontSize="30px" as="h3">
        Search the specific venue/hall you need for you event
      </Text>
      <Text margin="0 auto" fontSize="20px" w="40vw" as="h4">
        You can customize search based on location, capacity, price range of the hall
      </Text>
    </Box>
  </Center>
);

export default PreSearch;
