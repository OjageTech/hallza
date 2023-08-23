import {
  Box, Flex, Text, Image,
} from '@chakra-ui/react';
import React from 'react';

export function ResortSite({ hallx }: any) {
  return (
    <Box
      borderRadius="28px"
      h="fit-content"
      w="30vw"
      _hover={{
        cursor: 'pointer',
        boxShadow: '2xl',
      }}
    >
      <Box
        h="25vh"
        boxShadow="lg"
        _hover={{
          cursor: 'pointer',
        }}
      >
        <Image
          borderTopRadius="10px"
          h="100%"
          w="100%"
          objectFit="cover"
          src={hallx}
        />
      </Box>
      <Box mt=".7rem" textAlign="center">
        <Flex textAlign="left" justifyContent="space-between">
          <Box>
            <Text>Manyu Fishermen</Text>
            <Text fontWeight={600}>Fishing Club</Text>
          </Box>
          <Box>
            <Text>
              Capacity:
              {' '}
              <b>100</b>
              {' '}
              people
            </Text>
            <Text>Mamfe Town, Cameroon</Text>
          </Box>
        </Flex>
        <Text mt=".7rem" fontSize="13px">
          Starting from
          {' '}
          <strong>XAF 68,150</strong>
          /day
        </Text>
      </Box>
    </Box>
  );
}
