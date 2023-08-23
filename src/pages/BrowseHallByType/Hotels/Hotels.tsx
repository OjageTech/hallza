import {
  Box, Checkbox, Text, Image, Flex, useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import { HotelHall } from './HotelHall';
import MainSearch from '../../../components/common/MainSearch/MainSearch';
import hallx from '../../../assets/images/mologo_compressed-tatiana-balletti-xGw6aeq8KxM-unsplash.jpg';
import wave from '../../../assets/images/wave.png';
import ImageHeaderHero2Blue from '../../../assets/images/ImageHeaderHero2_Blue.jpg';

export default function Hotels() {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Box
        backgroundImage={ImageHeaderHero2Blue}
        backgroundPosition="right"
        backgroundSize="cover"
        pl="2.1rem"
        pr="2.1rem"
        h="30vh"
        backgroundColor="teal.50"
        pt="1rem"
      >
        <Text color="white" fontWeight={700} fontSize="27px">
          Find the perfect Hall in hotels on Hallza
        </Text>
        <Text color="white" fontWeight={600}>
          From budget hotels to luxury halls and everything in between
        </Text>
        <br />
        <MainSearch />
        <Checkbox mt="1rem" color="white">I'm booking for my company</Checkbox>
      </Box>
      <Box ml="2.1rem" mt="2rem" mr="2.1rem">
        <Flex justifyContent="space-between" mb="1rem">
          <HotelHall hallx={hallx} />
          <HotelHall hallx={wave} />
          <HotelHall hallx={hallx} />
        </Flex>
        <Flex mt="5rem" justifyContent="space-between">
          <HotelHall hallx={hallx} />
          <HotelHall hallx={wave} />
          <HotelHall hallx={hallx} />
        </Flex>
      </Box>
    </Box>
  );
}
