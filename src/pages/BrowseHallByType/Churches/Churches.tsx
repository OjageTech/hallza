import {
  Box, Checkbox, Text, Image, Flex, useColorMode, Spinner,
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
import { useAppSelector } from '../../../app/hooks';
import FilterContents from '../../../components/FilterContents/FilterContents';
import { FilterBy } from '../../FindnBrowseVenues/FindnBrowseVenues.page';

export default function Churches() {
  const { data: venues } = useAppSelector((state) => state.venues);
  const { loading } = useAppSelector((state) => state.venues);
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
        <Text color="white" fontWeight={{ base: 600, md: 700 }} fontSize={{ base: '25px', md: '40px' }}>
          Find the perfect Church for your event Hallza
        </Text>
        <Text color="white" fontWeight={600} fontSize={{ base: 'sm', md: '27px' }}>
          Be spirity with hallza and book a Church hall today
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
