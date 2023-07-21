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
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { AiOutlineBackward } from 'react-icons/ai';
import FeaturedVenues from '../../components/FeaturedVenues';
import { Venue } from '../../interfaces/venue';
import girl from '../../assets/images/Edge_Editorial.png';
import fio from '../../assets/images/ImageHeaderHero2_Blue.jpg';

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
    photos: [girl, fio],
    owner: {
      id: '39281',
      name: 'PurseMan',
      email: 'pursehauz@gmail.com',
    },
    created_at: 'Indiog2nd',
    updated_at: 'fionwee',
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
    photos: [girl, fio],
    owner: {
      id: '39281',
      name: 'PurseMan',
      email: 'pursehauz@gmail.com',
    },
    created_at: 'Indiog2nd',
    updated_at: 'fionwee',
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
    photos: [girl, fio],
    owner: {
      id: '39281',
      name: 'PurseMan',
      email: 'pursehauz@gmail.com',
    },
    created_at: 'Indiog2nd',
    updated_at: 'fionwee',
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
    photos: [girl, fio],
    owner: {
      id: '39281',
      name: 'PurseMan',
      email: 'pursehauz@gmail.com',
    },
    created_at: 'Indiog2nd',
    updated_at: 'fionwee',
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
    photos: [girl, fio],
    owner: {
      id: '39281',
      name: 'PurseMan',
      email: 'pursehauz@gmail.com',
    },
    created_at: 'Indiog2nd',
    updated_at: 'fionwee',
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
    photos: [girl, fio],
    owner: {
      id: '39281',
      name: 'PurseMan',
      email: 'pursehauz@gmail.com',
    },
    created_at: 'Indiog2nd',
    updated_at: 'fionwee',
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
    photos: [girl, fio],
    owner: {
      id: '39281',
      name: 'PurseMan',
      email: 'pursehauz@gmail.com',
    },
    created_at: 'Indiog2nd',
    updated_at: 'fionwee',
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
    photos: [fio, girl],
    owner: {
      id: '39281',
      name: 'PurseMan',
      email: 'pursehauz@gmail.com',
    },
    created_at: 'Indiog2nd',
    updated_at: 'fionwee',
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
    photos: [fio, girl],
    owner: {
      id: '39281',
      name: 'PurseMan',
      email: 'pursehauz@gmail.com',
    },
    created_at: 'Indiog2nd',
    updated_at: 'fionwee',
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
    photos: [fio, girl],
    owner: {
      id: '39281',
      name: 'PurseMan',
      email: 'pursehauz@gmail.com',
    },
    created_at: 'Indiog2nd',
    updated_at: 'fionwee',
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
    photos: [fio, girl],
    owner: {
      id: '39281',
      name: 'PurseMan',
      email: 'pursehauz@gmail.com',
    },
    created_at: 'Indiog2nd',
    updated_at: 'fionwee',
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
    photos: [fio, girl],
    owner: {
      id: '39281',
      name: 'PurseMan',
      email: 'pursehauz@gmail.com',
    },
    created_at: 'Indiog2nd',
    updated_at: 'fionwee',
  },
];
const Contents = () => (
  <Grid
    mt="4rem"
    templateColumns={{
      base: 'repeat(1,minmax(0,1fr))',
      sm: 'repeat(2,minmax(0,1fr))',
      lg: 'repeat(4,minmax(0,1fr))',
      xl: 'repeat(5,minmax(0,1fr))',
    }}
    gap={{
      sm: '.5rem',
      md: '.7rem',
      lg: '.9rem',
      xl: '1.1rem',
    }}
  >
    {ContentsData.map((data: Venue) => (
      <GridItem key={data.name}>
        <Box
          _hover={{
            cursor: 'pointer',
          }}
          h="20vh"
          w="16vw"
          borderRadius="md"
          border=".5px solid"
        >
          <Image
            objectFit="cover"
            h="100%"
            src={data.photos[0]}
          />
        </Box>
        <Flex
          alignItems="center"
          mt=".5rem"
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
      </GridItem>
    ))}
  </Grid>
);
const FindnBrowseVenues = () => (
  <Box
    maxW="100vw"
    h="100vh"
  >
    <Box
      w="80vw"
      m="0 auto"
      className="nav"
    >
      <Flex
        mt="1rem"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
        >
          <AiOutlineBackward />
          <Box
            textUnderlineOffset="1rem"
            fontWeight={700}
            textDecorationColor="#e5e7eb"
            sx={{
              // /* Fallback: Set a background color. */
              'backgroundColor': 'teal',

              /* Create the gradient. */
              'backgroundImage':
                'linear-gradient(to right,#14b8a6,#8b5cf6)',

              /* Set the background size and repeat properties. */
              'backgroundSize': '100%',
              'backgroundRepeat': 'repeat',

              /* Use the text as a mask for the background. */
              /* This will show the gradient as a text color rather than element bg. */
              '-webkit-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent',
              '-moz-background-clip': 'text',
              '-moz-text-fill-color': 'transparent',
            }}
            as="span"
          >
            Hallza
          </Box>
        </Flex>
        <Box>
          <Flex
            gap="1px"
            borderRadius="md"
            boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
          >
            <Input
              borderRadius="md"
              border="none"
              w="29rem"
              placeholder="Search"
            />
            <Flex
              justifyContent="center"
              alignItems="center"
              bg="#F8F8F8"
              w="4rem"
              p="5px"
              _hover={{ cursor: 'pointer' }}
            >
              <SearchIcon
                w="20px"
                h="20px"
              />
            </Flex>
          </Flex>
        </Box>
        <Button variant="primary">Go to profile</Button>
      </Flex>
    </Box>
    <Box
      w="80vw"
      m="0 auto"
    >
      <Contents />
    </Box>
  </Box>
);

export default FindnBrowseVenues;
