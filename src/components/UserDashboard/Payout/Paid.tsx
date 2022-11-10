
import {
    Box, Button, Flex, HStack, Select, Text, VStack,
  } from '@chakra-ui/react';
import React from 'react'

    
export const Paid =()=>{
    return (
      <>
        <Box
            height="67vh"
            bg="purple"
            mt="4px"
            mb='15px'
          />
           <Flex  justifyContent='space-between' >
           <HStack >
            <Button h="2rem">Previous {10}</Button>
            <Text>{20}</Text>
            <Button h="2rem">Next {10}</Button>
           </HStack>     
          <HStack  >
            <Select
              w="8rem"
              h="2rem"
            >
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </Select>
            <Button h="2rem">Search</Button>
            <Button h="2rem">Reset</Button>
  
          </HStack>
           </Flex>
      </>
    );
  }
 