/* eslint-disable object-curly-newline */
/* eslint-disable quote-props */
import {
  Box,
  Flex,
  Text,
  Grid,
  GridItem,
  Image,
  Button,
  Input,
  Checkbox,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { AiOutlineBackward } from 'react-icons/ai';
import FeaturedVenues from '../../components/FeaturedVenues';
import { Venue } from '../../interfaces/venue';
import girl from '../../assets/images/Edge_Editorial.png';
import lightBottle from '../../assets/images/lightBottle.jpg';
import Packing from '../../assets/images/Packing.jpg';
import LandingHeader from '../../layouts/headers/Landing.header';
import MainSearch from '../../components/common/MainSearch/MainSearch';
import geometricPatterns from '../../assets/images/geometricPatterns.png';
import Footer from '../../layouts/footers/Landing.footer';

const ContentsData: Venue[] = [
  {
    id: 'p12345',
    name: 'PurseHauz',
    description: 'The PursHauz',
    location: {
      address: 'Lala',
      city: 'Mamfe',
      state: 'SouthWest',
      zip: '31',
      country: 'Cameroon',
      latitude: 93,
      longitude: 12,
    },
    capacity: 400,
    amenities: ['Projector', 'Flat Screen'],
    photos: [Packing, lightBottle],
    owner: {
      id: '39281',
      name: 'PurseMan',
      email: 'pursehauz@gmail.com',
    },
    created_at: 'Indiog2nd',
    updated_at: 'lightBottlenwee',
  },
  {
    id: 'p12345',
    name: 'PurseHauz',
    description: 'The PursHauz',
    location: {
      address: 'Lala',
      city: 'Mamfe',
      state: 'SouthWest',
      zip: '31',
      country: 'Cameroon',
      latitude: 93,
      longitude: 12,
    },
    capacity: 400,
    amenities: ['Projector', 'Flat Screen'],
    photos: [girl, lightBottle],
    owner: {
      id: '39281',
      name: 'PurseMan',
      email: 'pursehauz@gmail.com',
    },
    created_at: 'Indiog2nd',
    updated_at: 'lightBottlenwee',
  },
  {
    id: 'p12345',
    name: 'PurseHauz',
    description: 'The PursHauz',
    location: {
      address: 'Lala',
      city: 'Mamfe',
      state: 'SouthWest',
      zip: '31',
      country: 'Cameroon',
      latitude: 93,
      longitude: 12,
    },
    capacity: 400,
    amenities: ['Projector', 'Flat Screen'],
    photos: [girl, lightBottle],
    owner: {
      id: '39281',
      name: 'PurseMan',
      email: 'pursehauz@gmail.com',
    },
    created_at: 'Indiog2nd',
    updated_at: 'lightBottlenwee',
  },
  {
    id: 'p12345',
    name: 'PurseHauz',
    description: 'The PursHauz',
    location: {
      address: 'Lala',
      city: 'Mamfe',
      state: 'SouthWest',
      zip: '31',
      country: 'Cameroon',
      latitude: 93,
      longitude: 12,
    },
    capacity: 400,
    amenities: ['Projector', 'Flat Screen'],
    photos: [girl, Packing],
    owner: {
      id: '39281',
      name: 'PurseMan',
      email: 'pursehauz@gmail.com',
    },
    created_at: 'Indiog2nd',
    updated_at: 'lightBottlenwee',
  },
  {
    id: 'p12345',
    name: 'PurseHauz',
    description: 'The PursHauz',
    location: {
      address: 'Lala',
      city: 'Mamfe',
      state: 'SouthWest',
      zip: '31',
      country: 'Cameroon',
      latitude: 93,
      longitude: 12,
    },
    capacity: 400,
    amenities: ['Projector', 'Flat Screen'],
    photos: [girl, lightBottle],
    owner: {
      id: '39281',
      name: 'PurseMan',
      email: 'pursehauz@gmail.com',
    },
    created_at: 'Indiog2nd',
    updated_at: 'lightBottlenwee',
  },
  {
    id: 'p12345',
    name: 'PurseHauz',
    description: 'The PursHauz',
    location: {
      address: 'Lala',
      city: 'Mamfe',
      state: 'SouthWest',
      zip: '31',
      country: 'Cameroon',
      latitude: 93,
      longitude: 12,
    },
    capacity: 400,
    amenities: ['Projector', 'Flat Screen'],
    photos: [girl, Packing],
    owner: {
      id: '39281',
      name: 'PurseMan',
      email: 'pursehauz@gmail.com',
    },
    created_at: 'Indiog2nd',
    updated_at: 'lightBottlenwee',
  },
  {
    id: 'p12345',
    name: 'PurseHauz',
    description: 'The PursHauz',
    location: {
      address: 'Lala',
      city: 'Mamfe',
      state: 'SouthWest',
      zip: '31',
      country: 'Cameroon',
      latitude: 93,
      longitude: 12,
    },
    capacity: 400,
    amenities: ['Projector', 'Flat Screen'],
    photos: [girl, lightBottle],
    owner: {
      id: '39281',
      name: 'PurseMan',
      email: 'pursehauz@gmail.com',
    },
    created_at: 'Indiog2nd',
    updated_at: 'lightBottlenwee',
  },
  {
    id: 'p12325',
    name: 'PurseHauz',
    description: 'The PursHauz',
    location: {
      address: 'Lala',
      city: 'Mamfe',
      state: 'SouthWest',
      zip: '31',
      country: 'Cameroon',
      latitude: 93,
      longitude: 12,
    },
    capacity: 400,
    amenities: ['Projector', 'Flat Screen'],
    photos: [lightBottle, girl],
    owner: {
      id: '39281',
      name: 'PurseMan',
      email: 'pursehauz@gmail.com',
    },
    created_at: 'Indiog2nd',
    updated_at: 'lightBottlenwee',
  },
  {
    id: 'p12325',
    name: 'PurseHauz',
    description: 'The PursHauz',
    location: {
      address: 'Lala',
      city: 'Mamfe',
      state: 'SouthWest',
      zip: '31',
      country: 'Cameroon',
      latitude: 93,
      longitude: 12,
    },
    capacity: 400,
    amenities: ['Projector', 'Flat Screen'],
    photos: [lightBottle, Packing],
    owner: {
      id: '39281',
      name: 'PurseMan',
      email: 'pursehauz@gmail.com',
    },
    created_at: 'Indiog2nd',
    updated_at: 'lightBottlenwee',
  },
  {
    id: 'p12325',
    name: 'PurseHauz',
    description: 'The PursHauz',
    location: {
      address: 'Lala',
      city: 'Mamfe',
      state: 'SouthWest',
      zip: '31',
      country: 'Cameroon',
      latitude: 93,
      longitude: 12,
    },
    capacity: 400,
    amenities: ['Projector', 'Flat Screen'],
    photos: [lightBottle, girl],
    owner: {
      id: '39281',
      name: 'PurseMan',
      email: 'pursehauz@gmail.com',
    },
    created_at: 'Indiog2nd',
    updated_at: 'lightBottlenwee',
  },
  {
    id: 'p12325',
    name: 'PurseHauz',
    description: 'The PursHauz',
    location: {
      address: 'Lala',
      city: 'Mamfe',
      state: 'SouthWest',
      zip: '31',
      country: 'Cameroon',
      latitude: 93,
      longitude: 12,
    },
    capacity: 400,
    amenities: ['Projector', 'Flat Screen'],
    photos: [lightBottle, girl],
    owner: {
      id: '39281',
      name: 'PurseMan',
      email: 'pursehauz@gmail.com',
    },
    created_at: 'Indiog2nd',
    updated_at: 'lightBottlenwee',
  },
  {
    id: 'p12325',
    name: 'Miracle Center',
    description: 'The PursHauz',
    location: {
      address: 'Muea',
      city: 'Buea',
      state: 'SouthWest',
      zip: '31',
      country: 'Cameroon',
      latitude: 93,
      longitude: 12,
    },
    capacity: 400,
    amenities: ['Projector', 'Flat Screen'],
    photos: [lightBottle, Packing],
    owner: {
      id: '39281',
      name: 'PurseMan',
      email: 'pursehauz@gmail.com',
    },
    created_at: 'Indiog2nd',
    updated_at: 'lightBottlenwee',
  },
];
export const Contents = () => (
  <Grid
    borderRadius="28px"
    mt="4rem"
    templateColumns={{
      base: 'repeat(1,minmax(0,1fr))',
      sm: 'repeat(2,minmax(0,1fr))',
      lg: 'repeat(3,minmax(0,1fr))',
      xl: 'repeat(4,minmax(0,1fr))',
    }}
    gap={{
      sm: '.5rem',
      md: '1.7rem',
      lg: '3.9rem',
      xl: '4.1rem',
    }}
  >
    {ContentsData.map((data: Venue) => (
      <GridItem
        key={data.name}
        borderRadius="28px"
        h="fit-content"
        w="19vw"
        _hover={{
          cursor: 'pointer',
          boxShadow: '2xl',
        }}
      >
        <Box
          h="25vh"
          boxShadow="lg"
          _hover={{
            cursor: 'pointer',
          }}
        >
          <Image
            borderTopRadius="10px"
            h="100%"
            w="100%"
            objectFit="cover"
            src={data.photos[1]}
          />
        </Box>
        <Box pl=".5rem" pr=".5rem" mt=".7rem" textAlign="center">
          <Flex alignItems="center" justifyContent="space-between">
            <Flex
              alignItems="center"
              gap="5px"
            >
              <Box
                border=".5px solid"
                borderRadius="50%"
                h="20px"
                w="20px"
              >
                <Image
                  objectFit="cover"
                  src={data.photos[1]}
                />
              </Box>
              <Text>{data.name}</Text>
            </Flex>
            <Text>{data.location.city}</Text>
          </Flex>
          <Text mt=".7rem" fontSize="13px">
            Starting from
            {' '}
            <strong>XAF 68,150</strong>
            /day
          </Text>
        </Box>
      </GridItem>
    ))}
  </Grid>
);
const FindnBrowseVenues = () => (
  <Box
    maxW="100vw"
    h="100vh"
  >
    <LandingHeader />
    <Box
      mt="4rem"
      backgroundImage={geometricPatterns}
      backgroundPosition="right"
      backgroundSize="cover"
      pl="2.1rem"
      pr="2.1rem"
      h="30vh"
      backgroundColor="teal.300"
      pt="1rem"
    >
      <Text color="white" fontWeight={700} fontSize="40px">
        Find the event space you need
      </Text>
      <Text color="white" fontSize="27px">
        Search deals on hotel banquet halls, outdoor spaces and much more...
      </Text>
      <br />
      <MainSearch />
      <Checkbox mt="1rem" color="white">I'm booking for my company</Checkbox>
    </Box>
    <Box
      w="80vw"
      ml="2.1rem"
      mb="2.1rem"
    >
      <Contents />
    </Box>
    <Footer />
  </Box>
);

export default FindnBrowseVenues;
