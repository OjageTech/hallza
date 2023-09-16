import {
  Box, Checkbox, Text, Image, Flex, useColorMode, Spinner,
} from '@chakra-ui/react';
import React from 'react';
import { ResortSite } from './ResortSite';
import MainSearch from '../../../components/common/MainSearch/MainSearch';
import hallx from '../../../assets/images/mologo_compressed-tatiana-balletti-xGw6aeq8KxM-unsplash.jpg';
import wave from '../../../assets/images/wave.png';
import BueaTownStadium from '../../../assets/images/BueaTownStadium.jpeg';
import ResortClub from '../../../assets/images/ResortClub.jpg';
import packing from '../../../assets/images/Packing.jpg';
import { useAppSelector } from '../../../app/hooks';
import { FilterBy } from '../../FindnBrowseVenues/FindnBrowseVenues.page';
import FilterContents from '../../../components/FilterContents/FilterContents';

export default function Resorts() {
  const { data: venues } = useAppSelector((state) => state.venues);
  const { loading } = useAppSelector((state) => state.venues);
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
        <Text color="white" fontWeight={{ base: 600, md: 700 }} fontSize={{ base: '25px', md: '40px' }}>
          Find the perfect Resort Hallza
        </Text>
        <Text color="white" fontWeight={600} fontSize={{ base: 'sm', md: '27px' }}>
          Have your events in the best resorts across the country
        </Text>
        <br />
        <MainSearch />
        <Checkbox colorScheme="teal" mt="1rem" size={{ base: 'sm', md: 'auto' }}>
          I'm booking for my company
        </Checkbox>
      </Box>
      <Flex w={{ base: '100%', md: '95vw' }} ml={{ base: '0', md: '2.1rem' }} mb="2.1rem" gap="1ch">
        <Box display={{ base: 'none', md: 'block' }}>
          <FilterBy />
        </Box>
        {
          loading ? <Box m="0 auto" mt="4rem"><Spinner color="primary" size="xl" /></Box>
            : (
              <Box
                mt={{ base: '11.5rem', md: '4rem' }}
              >
                <FilterContents data={venues} />
              </Box>
            )
      }
      </Flex>
    </Box>
  );
}
