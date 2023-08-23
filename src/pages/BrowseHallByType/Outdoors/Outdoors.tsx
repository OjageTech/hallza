import {
  Box, Checkbox, Text, Image, Flex, useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import { OutdoorSite } from './OutdoorSite';
import MainSearch from '../../../components/common/MainSearch/MainSearch';
import hallx from '../../../assets/images/mologo_compressed-tatiana-balletti-xGw6aeq8KxM-unsplash.jpg';
import wave from '../../../assets/images/wave.png';
import BueaTownStadium from '../../../assets/images/BueaTownStadium.jpeg';
import Beach from '../../../assets/images/Beach.jpeg';
import lightBottle from '../../../assets/images/lightBottle.jpg';

export default function Outdoors() {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Box
        backgroundImage={BueaTownStadium}
        backgroundPosition="right"
        backgroundSize="cover"
        pl="2.1rem"
        pr="2.1rem"
        h="30vh"
        backgroundColor="teal.50"
        pt="1rem"
      >
        <Text color="white" fontWeight={700} fontSize="27px">
          Find the perfect Outdoor space on Hallza
        </Text>
        <Text color="white" fontWeight={600}>
          From basic backyard spaces to spacious open-air environs
        </Text>
        <br />
        <MainSearch />
        <Checkbox mt="1rem" color="white">I'm booking for my company</Checkbox>
      </Box>
      <Box ml="2.1rem" mt="2rem" mr="2.1rem">
        <Flex justifyContent="space-between" mb="1rem">
          <OutdoorSite hallx={BueaTownStadium} />
          <OutdoorSite hallx={wave} />
          <OutdoorSite hallx={Beach} />
        </Flex>
        <Flex mt="5rem" justifyContent="space-between">
          <OutdoorSite hallx={wave} />
          <OutdoorSite hallx={Beach} />
          <OutdoorSite hallx={BueaTownStadium} />
        </Flex>
      </Box>
    </Box>
  );
}
