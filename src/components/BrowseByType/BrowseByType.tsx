import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Flex, Text, Image,
} from '@chakra-ui/react';
import HallCover from '../../assets/images/mologo_compressed-danielle-cerullo-bIZJRVBLfOM-unsplash.jpg';
import Stairs from '../../assets/images/Stairs.jpg';
import ResortClub from '../../assets/images/ResortClub.jpg';
import BueaTownStadium from '../../assets/images/BueaTownStadium.jpeg';
import CaptionCarousel from '../Carousel/CarouselWithCaption';

const typeCategory = [
  {
    type: 'Hotels',
    number: 22,
    coverImage: HallCover,
    to: '/browse/hotels',
  },
  {
    type: 'The Outdoors',
    number: 42,
    coverImage: BueaTownStadium,
    to: '/browse/outdoors',
  },
  {
    type: 'Churches',
    number: 12,
    coverImage: Stairs,
    to: '/browse/churches',
  },
  {
    type: 'Resorts',
    number: 10,
    coverImage: ResortClub,
    to: '/browse/resorts',
  },
];

function BrowseByType() {
  return (
    <Box mb="1rem" mt="2rem" mr="2.1rem" ml="2.1rem" w="95.7%">
      <Text fontWeight={700} fontSize="22px">Browse by hall type</Text>
      {/* <CaptionCarousel category={typeCategory} /> */}
      <Flex flexDir={{ base: 'column', md: 'row' }} mt=".9rem" justifyContent="space-between">
        {
          typeCategory.map((property) => (
            <Box as={Link} to={property.to}>
              <Box h="26vh" w={{ base: '87vw', md: '20vw' }}><Image borderRadius={7} h="100%" w="100%" objectFit="cover" src={property.coverImage} /></Box>
              <Text fontWeight={600}>{property.type}</Text>
              <Text>
                {property.number}
                {' '}
                {(() => {
                  switch (property.type) {
                    case 'Hotels':
                      return 'hotels';
                    case 'Resorts':
                      return 'resorts';
                    case 'Churches':
                      return 'churches';
                    case 'The Outdoors':
                      return 'spaces';
                    default:
                      return null;
                  }
                })()}
              </Text>
            </Box>
          ))
        }

      </Flex>
    </Box>
  );
}

export default BrowseByType;
