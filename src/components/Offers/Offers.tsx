import { Link } from 'react-router-dom';
import {
  Box, Text, Flex, Image, Button,
} from '@chakra-ui/react';
import React from 'react';
import ConfHall from '../../assets/images/mologo_compressed-asia-culturecenter-COWf-5ZtZ6w-unsplash.jpg';
import ConfHall2 from '../../assets/images/Beach.jpeg';

function Offers() {
  return (
    <Box ml={{ base: '0.5rem', md: '2.1rem' }} mr={{ base: '0.5rem', md: '2.1rem' }} mb=".9rem" mt={{ base: '15rem', md: '2rem' }} w={{ base: '95.8%', md: 'inherit' }}>
      <Text fontWeight={700} fontSize="26px" className="title" as="h2">Offers</Text>
      <Text className="sub-title">Promotions, deals, and special offers for you</Text>
      <Flex mt=".8rem" gap="1rem" flexDir={{ base: 'column', md: 'row' }}>
        <Flex justifyContent="space-between" h="30vh" borderRadius={7} boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px;">
          <Box fontSize={{ base: 'xs', md: 'inherit' }} pl="1rem" pt="1rem">
            <Text fontWeight={600}>Find the perfect hall for your conference</Text>
            <Text mb={{ base: '1rem', md: '1rem' }}>Browse event spaces offering discounts, extra amenities</Text>
            <Button variant="primary" as={Link} to="/find">Find a Venue</Button>
          </Box>
          <Image borderRightRadius={7} objectFit={{ base: 'cover', md: 'cover' }} w="40%" src={ConfHall} />
        </Flex>
        <Box w={{ base: '100%', md: '52%' }} color="white" backgroundSize={{ base: 'cover', md: 'contain' }} position={{ base: 'inherit', md: 'relative' }} h="30vh" borderRadius={7} boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px;">
          <Box p="1rem" fontSize="xs" borderRadius={7} display={{ base: 'block', md: 'none' }} h="100%" w="100%" backgroundImage="url(https://img.freepik.com/free-vector/fashion-model-with-summer-outfit_79603-528.jpg?size=626&ext=jpg&ga=GA1.1.513754652.1688231868&semt=ais)">
            <Text fontWeight={600}>The beginning of something</Text>
            <Text mb="1rem">Save at least 15% on event spaces nationwide, from halls for birthdays to grand stadiums for concerts</Text>
            <Button variant="primary">Find Conference deals</Button>
          </Box>
          <Box display={{ base: 'none', md: 'block' }} borderRadius={7} zIndex="-1" position={{ base: 'inherit', md: 'absolute' }} top="0" left="0" h="100%" w="100%" backgroundImage="url(https://img.freepik.com/free-vector/fashion-model-with-summer-outfit_79603-528.jpg?size=626&ext=jpg&ga=GA1.1.513754652.1688231868&semt=ais)" transform="rotateY(180deg)" />

          <Box
            display={{ base: 'none', md: 'block' }}
            background="rgba(21, 232, 207, 0.1)"
            borderRadius="7"
            boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
            backdropFilter="blur(5px)"
            w="50%"
            p="1rem"
            h="100%"
          >
            <Text fontWeight={600}>The beginning of something</Text>
            <Text mb={{ base: '0.4rem', md: '1rem' }}>Save at least 15% on event spaces nationwide, from halls for birthdays to grand stadiums for concerts</Text>
            <Button variant="primary">Find Conference deals</Button>
          </Box>

        </Box>
      </Flex>
    </Box>
  );
}

export default Offers;
