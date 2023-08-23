import {
  Box, Checkbox, Text, Image, Flex, useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import { ResortSite } from './ResortSite';
import MainSearch from '../../../components/common/MainSearch/MainSearch';
import hallx from '../../../assets/images/mologo_compressed-tatiana-balletti-xGw6aeq8KxM-unsplash.jpg';
import wave from '../../../assets/images/wave.png';
import BueaTownStadium from '../../../assets/images/BueaTownStadium.jpeg';
import ResortClub from '../../../assets/images/ResortClub.jpg';
import packing from '../../../assets/images/Packing.jpg';

export default function Resorts() {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Box
        backgroundImage={ResortClub}
        backgroundPosition="right"
        backgroundSize="cover"
        pl="2.1rem"
        pr="2.1rem"
        h="30vh"
        backgroundColor="teal.50"
        pt="1rem"
      >
        <Text color="white" fontWeight={700} fontSize="27px">
          Find the perfect Resort Hallza
        </Text>
        <Text color="white" fontWeight={600}>
          Have your events in the best resorts across the country
        </Text>
        <br />
        <MainSearch />
        <Checkbox mt="1rem" color="white">I'm booking for my company</Checkbox>
      </Box>
      <Box ml="2.1rem" mt="2rem" mr="2.1rem">
        <Flex justifyContent="space-between" mb="1rem">
          <ResortSite hallx={ResortClub} />
          <ResortSite hallx={packing} />
          <ResortSite hallx={ResortClub} />
        </Flex>
        <Flex mt="5rem" justifyContent="space-between">
          <ResortSite hallx={packing} />
          <ResortSite hallx={wave} />
          <ResortSite hallx={hallx} />
        </Flex>
      </Box>
    </Box>
  );
}
