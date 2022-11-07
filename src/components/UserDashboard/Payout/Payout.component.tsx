import { Box, Button, Flex, HStack, Select, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';

function Payout() {

  const OPtions=[
    "Paid",
    "Pending",
    "Approved",
    "Rejected"
  ];

  const [selectOption, setOption]= useState("");

  return (
    <Box
    margin='20px 0'
    w='100vw'
     
    >

      {/* 
      
      THIS CODE IS TO DISPLAY THE ELEMENTS IN A HORIZONTAL FORMAT
      THIS ELEMENTS ARE CLICKABLE

      */}
      <Flex
      justifyContent='space-evenly'
      >
        <Button
          // border="1px solid highlight"
          w="10vw"
          h="20vh"

          borderRadius='15'
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

          borderRadius='15'
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
          
          borderRadius='15'
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

          borderRadius='15'
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
        marginTop='14vh'
        >
          <Button>Payment Request</Button>
        </Box>
      </Flex>
{/* THIS IS THE EDN OF CODE THAT DISPLAY THE FIRST FIVE ELEMENT IN A HORIZONTAL FORMAT */}

        {/* 
        THIS IS WERE THE CONTENT OF THE INDIVIDUAL ICONS WILL BE DISPLAYDED
        WHDN THEY ARE CLICKED.
        */}

        <Box
        h='73vh'
        
        bg='ButtonFace'
       
        m='2rem 2rem'
        borderRadius='15px'
        padding='2rem'
        >
            <Text mb='1rem'>Payout Summary</Text>
         <Flex>

         <HStack flex='1'>
          <Select
            w='8rem'
            >
              <option value='paid'>Paid</option>
              <option value='pending'>Pending</option>
              <option value='Approved'>Approved</option>
              <option value='Rejected'>Rejected</option>
            </Select>
            <Button>Search</Button>
            <Button>Reset</Button>


          </HStack>

          <HStack flex='1' justify='end'>
            <Button>Excell</Button>
            <Button>CSV</Button>
            <Button>Print</Button>
          </HStack>
         </Flex>
          <Box
          height='45vh'
          bg='purple'
          m='7px'
          />
              
              <HStack justifyContent='end' padding='8px'>
          <Select
            w='8rem'
            >
              <option value='paid'>Paid</option>
              <option value='pending'>Pending</option>
              <option value='Approved'>Approved</option>
              <option value='Rejected'>Rejected</option>
            </Select>
            <Button>Search</Button>
            <Button>Reset</Button>


          </HStack>

        </Box>

    </Box>
  );
}

export default Payout;
