import {
  Box, Button, Flex, HStack, Select, Text, VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import Searchbar from '../../common/searchbar/Searchbar';
import { Paid } from './Paid';

function Payout() {
  const OPtions = [
    'Paid',
    'Pending',
    'Approved',
    'Rejected',
  ];

  const [selectOption, setOption] = useState('');

  return (
  // THIS IS THE MAIN DIV THAT CONTAINS ALL THE OTHER DIV OF THE APPLICATION

    <Box
      margin="20px 0"
      w="100vw"
      h="70
    "

    >

      {/*

      THIS CODE IS TO DISPLAY THE ELEMENTS IN A HORIZONTAL FORMAT
      THIS ELEMENTS ARE CLICKABLE

      */}
      <Flex
      h='20vh'
        justifyContent="space-evenly"
       
      >
        <Button
          // border="1px solid highlight"
          w="10vw"
          h="20vh"

          borderRadius="15"
        >
          <VStack>
            <Text>Pending</Text>
            <HStack>
              <Text>0</Text>
              <Button>NCN</Button>
            </HStack>
          </VStack>
        </Button>

        <Button
          // border="1px solid highlight"
          w="10vw"
          h="20vh"

          borderRadius="15"
        >
          <VStack>
            <Text>Approved</Text>
            <HStack>
              <Text>0</Text>
              <Button>NCN</Button>
            </HStack>
          </VStack>
        </Button>

        <Button
          // border="1px solid highlight"
          w="10vw"
          h="20vh"

          borderRadius="15"
        >
          <VStack>
            <Text>Paid</Text>
            <HStack>
              <Text>0</Text>
              <Button>NCN</Button>
            </HStack>
          </VStack>
        </Button>

        <Button 
          // border="none"
          w="10vw"
          h="20vh"

          borderRadius="15"
        >
          <VStack>
            <Text>Rejected</Text>
            <HStack>
              <Text>0</Text>
              <Button>NCN</Button>
            </HStack>
          </VStack>
        </Button>

        <Box
          marginTop="1rem"
        >
          <Button>Payment Request</Button>
        </Box>
        {/* THIS IS THE SIDDE DROPDOWN BUTTON 
            FOR THE USER TO SELECT WHAT THEY INTENT TO SEE
        */}
       

          {/* 
            THIS IT THE END OF THE DROPDWON BUTTON
          */}
      </Flex>
      {/* THIS IS THE EDN OF CODE THAT DISPLAY THE FIRST FIVE ELEMENT IN A HORIZONTAL FORMAT */}

      {/*
        THIS IS WERE THE CONTENT OF THE INDIVIDUAL ICONS WILL BE DISPLAYDED
        WHDN THEY ARE CLICKED.
        */}

      <Box
        h="94vh"

        bg="navy"

        m="2rem 2rem"
        borderRadius="15px"
        padding="2rem"
      >
        <Text mb="1rem">Payout Summary</Text>
        <Flex>

          <HStack flex="1">
            <Select
              w="8rem"
            >
               <option value="all">...</option>
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </Select>
            <Searchbar />
            <Button>Reset</Button>
            <Select
            mt='5.6rem'
            w="4.5rem"
            h="2rem"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="15">20</option>
            <option value="20">25</option>
          </Select>

          </HStack>

          <HStack flex="1" justify="end">
            <Button>Excell</Button>
            <Button>CSV</Button>
            <Button>Print</Button>
          </HStack>
        </Flex>
        
          <Paid/>
      </Box>

    </Box>
  );
}

export default Payout;
