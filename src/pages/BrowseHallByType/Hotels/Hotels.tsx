import {
  Box, Checkbox, Text, Image, Flex, useColorMode, Spinner,
} from '@chakra-ui/react';
import React from 'react';
import { HotelHall } from './HotelHall';
import MainSearch from '../../../components/common/MainSearch/MainSearch';
import hallx from '../../../assets/images/mologo_compressed-tatiana-balletti-xGw6aeq8KxM-unsplash.jpg';
import wave from '../../../assets/images/wave.png';
import ImageHeaderHero2Blue from '../../../assets/images/ImageHeaderHero2_Blue.jpg';
import { FilterBy } from '../../FindnBrowseVenues/FindnBrowseVenues.page';
import { useAppSelector } from '../../../app/hooks';
import FilterContents from '../../../components/FilterContents/FilterContents';

export default function Hotels() {
  const { data: venues } = useAppSelector((state) => state.venues);
  const { loading } = useAppSelector((state) => state.venues);
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
        <Text color="white" fontWeight={{ base: 600, md: 700 }} fontSize={{ base: '25px', md: '40px' }}>
          Find the perfect Hall in hotels on Hallza
        </Text>
        <Text color="white" fontWeight={600} fontSize={{ base: 'sm', md: '27px' }}>
          From budget hotels to luxury halls and everything in between
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
