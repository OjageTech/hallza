import { Link } from 'react-router-dom';
import {
  Box, Text, Flex, Image, Button,
} from '@chakra-ui/react';
import React from 'react';
import ConfHall from '../../assets/images/mologo_compressed-asia-culturecenter-COWf-5ZtZ6w-unsplash.jpg';
import ConfHall2 from '../../assets/images/Beach.jpeg';

function Offers() {
  return (
    <Box ml="2.1rem" mr="2.1rem" mb=".9rem" mt="2rem">
      <Text fontWeight={700} fontSize="26px" className="title" as="h2">Offers</Text>
      <Text className="sub-title">Promotions, deals, and special offers for you</Text>
      <Flex mt=".8rem" gap="1rem">
        <Flex justifyContent="space-between" h="30vh" borderRadius={7} boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px;">
          <Box pl="1rem" pt="1rem">
            <Text fontWeight={600}>Find the perfect hall for your conference</Text>
            <Text>Browse event spaces offering discounts, extra amenities</Text>
            <br />
            <Button variant="primary" as={Link} to="/find">Find a Venue</Button>
          </Box>
          <Image borderRightRadius={7} w="40%" src={ConfHall} />
        </Flex>
        <Box w="52%" color="white" backgroundSize="contain" position="relative" h="30vh" borderRadius={7} boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px;">
          <Box zIndex="-1" pos="absolute" top="0" left="0" h="100%" w="100%" backgroundImage="url(https://img.freepik.com/free-vector/fashion-model-with-summer-outfit_79603-528.jpg?size=626&ext=jpg&ga=GA1.1.513754652.1688231868&semt=ais)" transform="rotateY(180deg)" />
          <Box
            background="rgba(21, 232, 207, 0.1)"
            borderRadius="7"
            boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
            backdropFilter="blur(5px)"
            w="50%"
            p="1rem"
            h="100%"
          >
            <Text fontWeight={600}>The beginning of something</Text>
            <Text>Save at least 15% on event spaces nationwide, from halls for birthdays to grand stadiums for concerts</Text>
            <br />
            <Button variant="primary">Find Conference deals</Button>
          </Box>

        </Box>
      </Flex>
    </Box>
  );
}

export default Offers;
