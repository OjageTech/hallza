import { ArrowBackIcon, ArrowForwardIcon, ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon, PhoneIcon, WarningIcon } from '@chakra-ui/icons';
import {
  Box, Button, Flex, HStack, Icon, Select, Text, VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import Searchbar from '../../common/searchbar/Searchbar';
import { Approved } from './Approved';
import { Paid } from './Paid';
import { Pending } from './Pending';
import { Rejected } from './Rejected';

function Payout() {
  const [selectedPage, setSelectedPage]= useState('Pending');

  const [numberofrows, setNumberOfRows] =useState(10)
  const OPtions = [
    "...",
    'Paid',
    'Pending',
    'Approved',
    'Rejected',
  ];
const Numbers=[10,20,30,40,50,60,70];

//  const handleDropdownChanges=(value)=>{
//   setSelectedPage=value
//  }
  

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
        <Box
          // border="1px solid highlight"
          w="10vw"
          h="20vh"

          borderRadius="15"
          onClick={()=>setSelectedPage("Pending")}
           bg={selectedPage==="Pending"?'blue':"navy"}
          // bg='navy'
        >
           
          <VStack >
          <Icon name="phone" mt='20px'/>
            <Text>Pending</Text>
            <HStack>
              <Text>0</Text>
              <Button>NCN</Button>
            </HStack>
          </VStack>
        </Box>

        <Box
          // border="1px solid highlight"
          w="10vw"
          h="20vh"

          borderRadius="15"
          onClick={()=>setSelectedPage("Approved")} 
          bg={selectedPage==="Approved"?'blue':"navy"}
        >
          
          <VStack>
          <Icon name="phone" mt='20px'/>
            <Text>Approved</Text>
            <HStack>
              <Text>0</Text>
              <Button>NCN</Button>
            </HStack>
          </VStack>
        </Box>

        <Box
          // border="1px solid highlight"
          w="10vw"
          h="20vh"

          borderRadius="15"
          onClick={()=>setSelectedPage("Paid")}
           bg={selectedPage==="Paid"?'blue':"navy"}

        >
          
          <VStack >
          <Icon name="phone" mt='20px'/>
            <Text>Paid</Text>
            <HStack>
              <Text>0</Text>
              <Button>NCN</Button>
            </HStack>
          </VStack>
        </Box>

        <Box 
          
          w="10vw"
          h="20vh"

          borderRadius="15"
          onClick={()=>setSelectedPage("Rejected")} 
          bg ={selectedPage==="Rejected"?'blue':'navy'}
        >
          <VStack >
          <Icon name="phone" mt='20px'/>
            <Text>Rejected</Text>
            <HStack>
              <Text>0</Text>
              <Button>NCN</Button>
            </HStack>
          </VStack>
        </Box>

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
              // placeholder={selectedPage}
              onChange={()=>setSelectedPage(selectedPage)}
              value={selectedPage}
            >
              
               
               {OPtions.map(optionItem=>(
                <option value={optionItem} onClick={()=>setSelectedPage(optionItem)}  >{optionItem}</option>
              
              
              ))}
             
            </Select>
            <Searchbar />
            <Button>Reset</Button>
           

          </HStack>

          <HStack flex="1" justify="end">
            <Button>Excell</Button>
            <Button>CSV</Button>
            <Button>Print</Button>
          </HStack>
        </Flex>
          {/* THIS IS A COMPONENT  */}
        <Box
         height="67vh"
           
         mt="4px"
         mb='15px'
         overflowY='scroll'
        >
          
         
        { selectedPage==="Paid"&& <Paid/>}
          {selectedPage==="Pending"&&<Pending number={numberofrows}/>}
          {selectedPage==="Approved"&&<Approved/>}
          {selectedPage==="Rejected"&&<Rejected/>}

          {<div>this number per page is {numberofrows}</div>}

        </Box>
          <Flex  justifyContent='space-between' >
           <HStack >
           <Select
            
            w="14.5rem"
            h="2rem"
            placeholder='Numbers per page 10'
            onChange={()=>setNumberOfRows(10)}
            // value={}
          >
           {Numbers.map(item=>(
            <option value={numberofrows} onClick={()=>setNumberOfRows(item)} onChange={()=>setNumberOfRows(item)}>{item}</option>
           ))}
            {/* <option value="5" onChange={()=>setNumberOfRows(5)}>5</option>
            <option value="10"onChange={()=>setNumberOfRows(10)}>10</option>
            <option value="15" onChange={()=>setNumberOfRows(15)}>15</option>
            <option value="15" onClick={()=>setNumberOfRows(20)}>20</option>
            <option value="20" onClick={()=>setNumberOfRows(25)}>25</option> */}
          </Select>
            {/* <Button h="2rem">Previous{10}</Button> */}
            <ChevronLeftIcon h='2rem' w='3rem'/>
            <Text>{numberofrows}</Text>
           <ChevronRightIcon  h='2rem' w='3rem'/>
           </HStack>     
        
           </Flex>
      </Box>

    </Box>
  );
}

export default Payout;
