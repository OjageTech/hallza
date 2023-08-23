import {
  Box, Checkbox, Text, Image, Flex, useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import { ChurchSite } from './ChurchSite';
import MainSearch from '../../../components/common/MainSearch/MainSearch';
import hallx from '../../../assets/images/mologo_compressed-tatiana-balletti-xGw6aeq8KxM-unsplash.jpg';
import wave from '../../../assets/images/wave.png';
import BueaTownStadium from '../../../assets/images/BueaTownStadium.jpeg';
import CrossAndBible from '../../../assets/images/Cross and Bible Wallpaper Download.jpg';
import Cross from '../../../assets/images/Cross.jpg';
import Stairs from '../../../assets/images/Stairs.jpg';

export default function Churches() {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Box
        backgroundImage={Cross}
        backgroundPosition="right"
        backgroundSize="cover"
        pl="2.1rem"
        pr="2.1rem"
        h="30vh"
        backgroundColor="teal.50"
        pt="1rem"
      >
        <Text color="white" fontWeight={700} fontSize="27px">
          Find the perfect Church for your event Hallza
        </Text>
        <Text color="white" fontWeight={600}>
          Be spirity with hallza and book a Church hall today
        </Text>
        <br />
        <MainSearch />
        <Checkbox mt="1rem" color="white">I'm booking for my company</Checkbox>
      </Box>
      <Box ml="2.1rem" mt="2rem" mr="2.1rem">
        <Flex justifyContent="space-between" mb="1rem">
          <ChurchSite hallx={CrossAndBible} />
          <ChurchSite hallx={Stairs} />
          <ChurchSite hallx={Cross} />
        </Flex>
        <Flex mt="5rem" justifyContent="space-between">
          <ChurchSite hallx={Stairs} />
          <ChurchSite hallx={wave} />
          <ChurchSite hallx={CrossAndBible} />
        </Flex>
      </Box>
    </Box>
  );
}
