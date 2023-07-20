import {
  Box, Flex, Text, Image,
} from '@chakra-ui/react';
import React from 'react';

function BrowseByType() {
  return (
    <Box mb="1rem" mt="2rem" ml="2.1rem" w="95.7%">
      <Text fontWeight={700} fontSize="22px">Browse by hall type</Text>
      <Flex mt=".9rem" justifyContent="space-between">
        <Box>
          <Box h="26vh"><Image borderRadius={7} h="100%" src="https://images.unsplash.com/photo-1583953458882-302655b5c376?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVsJTIwY29uZmVyZW5jZSUyMHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" /></Box>
          <Text fontWeight={600}>Hotels</Text>
          <Text>22 hotels</Text>
        </Box>

        <Box>
          <Box h="26vh"><Image borderRadius={7} h="100%" src="https://images.unsplash.com/photo-1583953458882-302655b5c376?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVsJTIwY29uZmVyZW5jZSUyMHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" /></Box>
          <Text fontWeight={600}>The Outdoors</Text>
          <Text>42 spaces</Text>
        </Box>

        <Box>
          <Box h="26vh"><Image borderRadius={7} h="100%" src="https://images.unsplash.com/photo-1583953458882-302655b5c376?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVsJTIwY29uZmVyZW5jZSUyMHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" /></Box>
          <Text fontWeight={600}>Churches</Text>
          <Text>12 churches</Text>
        </Box>

        <Box>
          <Box h="26vh"><Image borderRadius={7} h="100%" src="https://images.unsplash.com/photo-1583953458882-302655b5c376?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVsJTIwY29uZmVyZW5jZSUyMHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" /></Box>
          <Text fontWeight={600}>Resorts</Text>
          <Text>10 resorts</Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default BrowseByType;
