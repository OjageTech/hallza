import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react';
import { MdLocalShipping } from 'react-icons/md';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchVenuesData } from '../../features/venues/venues-slice';
import LandingHeader from '../../layouts/headers/Landing.header';

const VenueDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data: venues } = useAppSelector((state) => state.venues);
  const { id } = useParams();
  const urlID = id || '';

  useEffect(() => {
    dispatch(fetchVenuesData());
  }, [dispatch]);

  const findVenueById = (venueId: string) => venues.find((indivenue) => indivenue._id === venueId);

  const foundVenue = findVenueById(urlID);

  if (!foundVenue) {
    return <Box>Venue not found</Box>;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
  // <Box p={4}>
  //   <Flex gap="1rem">
  //     <Image
  //       src={foundVenue?.photos[1]}
  //       alt="Venue Image"
  //       maxH="300px"
  //       objectFit="cover"
  //       mb={4}
  //     />
  //     <div>
  //       <Heading as="h1" size="xl" mb={2}>
  //         {foundVenue?.name}
  //       </Heading>
  //       <Badge colorScheme="green" mb={2}>
  //         {foundVenue?.location.city}
  //       </Badge>
  //       <Text color="gray.600" fontSize="md" mb={4}>
  //         {foundVenue?.description}
  //       </Text>
  //     </div>
  //   </Flex>

    //   <Divider my={4} />
    //   <Heading as="h2" size="lg" mb={2}>
    //     Venue Details
    //   </Heading>
    //   <Box fontSize="md" mb={4}>
    //     <span>This venue can accommodate </span>
    //     {foundVenue?.capacity}
    //     <span> people </span>
    //     <span> And it is available from </span>
    //     <span>{formatDate(foundVenue?.availability.start_date)}</span>
    //     <span>
    //       to
    //       {' '}
    //       {formatDate(foundVenue?.availability.end_date)}
    //     </span>
    //   </Box>
    //   <Flex gap="1rem">
    //     {foundVenue?.photos.map((photo: string | undefined, index: number) => (
    //       <Image
    //         key={foundVenue?.photos.indexOf(photo as string)}
    //         src={photo}
    //         alt={`Venue Image ${index}`}
    //         maxH="300px"
    //         objectFit="cover"
    //         mb={4}
    //       />
    //     ))}
    //   </Flex>
    //   <Heading as="h2" size="lg" mb={2}>
    //     Amenities
    //   </Heading>
    //   <Box mb={4}>
    //     <Badge colorScheme="blue" mr={2}>
    //       Seating for
    //       {' '}
    //       {foundVenue?.capacity}
    //     </Badge>
    //     <Badge colorScheme="blue" mr={2}>
    //       Catering Available
    //     </Badge>
    //     <Badge colorScheme="blue" mr={2}>
    //       Audio System
    //     </Badge>
    //     <Badge colorScheme="blue" mr={2}>
    //       Parking Space
    //     </Badge>
    //   </Box>
    //   <Button colorScheme="green" size="lg" as={Link} to="/login">
    //     Book This Venue
    //   </Button>
    // </Box>
    <>
      <LandingHeader />

      <Container maxW="7xl" mt="4rem">
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              rounded="md"
              alt="Venue"
              src={foundVenue?.photos[1]}
              fit="cover"
              align="center"
              w="100%"
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as="header">
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
              >
                {foundVenue?.name}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize="2xl"
              >
                {foundVenue?.location.city}
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction="column"
              divider={
                <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
            }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize="2xl"
                  fontWeight="300"
                >
                  {foundVenue?.description}
                </Text>
                <Text fontSize="lg">
                  This is just demo text showing us more of the description of this particular event space
                  This is just demo text showing us more of the description of this particular event space
                  This is just demo text showing us more of the description of this particular event space
                  This is just demo text showing us more of the description of this particular event space
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('teal.500', 'teal.300')}
                  fontWeight="500"
                  textTransform="uppercase"
                  mb="4"
                >
                  Features
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Air Conditioning</ListItem>
                    <ListItem>Sound System</ListItem>
                    {' '}
                    <ListItem>Standby Generator</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>Wifi Connection</ListItem>
                    <ListItem>Serene Environment</ListItem>
                    <ListItem>Accessible</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('teal.500', 'teal.300')}
                  fontWeight="500"
                  textTransform="uppercase"
                  mb="4"
                >
                  Hall Details
                </Text>

                <List spacing={2}>
                  <ListItem>
                    <Text as="span" fontWeight="bold">
                      Capacity:
                    </Text>
                    {' '}
                    {foundVenue?.capacity}
                  </ListItem>
                  <ListItem>
                    <Text as="span" fontWeight="bold">
                      Cost per day:
                    </Text>
                    {' '}
                    {foundVenue?.price_per_day}
                    XAF
                  </ListItem>
                  <ListItem>
                    <Text as="span" fontWeight="bold">
                      Owner:
                    </Text>
                    {' '}
                    {foundVenue?.owner.name}
                    {' '}
                  </ListItem>
                </List>
              </Box>
            </Stack>

            <Button
              variant="primary"
              w="full"
              mt={8}
              size="lg"
              py="7"
            // bg={useColorModeValue('gray.900', 'gray.50')}
            // color={useColorModeValue('white', 'gray.900')}
              textTransform="uppercase"
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}
            >
              Book Now
            </Button>

            <Stack direction="row" alignItems="center" justifyContent="center">
              <MdLocalShipping />
              <Text>30 minutes drive from your location</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default VenueDetails;
