import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Box,
  Heading,
  Text,
  Image,
  Badge,
  Button,
  Divider,
  Flex,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchVenuesData } from '../../features/venues/venues-slice';

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
    <Box p={4}>
      <Flex gap="1rem">
        <Image
          src={foundVenue?.photos[1]}
          alt="Venue Image"
          maxH="300px"
          objectFit="cover"
          mb={4}
        />
        <div>
          <Heading as="h1" size="xl" mb={2}>
            {foundVenue?.name}
          </Heading>
          <Badge colorScheme="green" mb={2}>
            {foundVenue?.location.city}
          </Badge>
          <Text color="gray.600" fontSize="md" mb={4}>
            {foundVenue?.description}
          </Text>
        </div>
      </Flex>

      <Divider my={4} />
      <Heading as="h2" size="lg" mb={2}>
        Venue Details
      </Heading>
      <Box fontSize="md" mb={4}>
        <span>This venue can accommodate </span>
        {foundVenue?.capacity}
        <span> people </span>
        <span> And it is available from </span>
        <span>{formatDate(foundVenue?.availability.start_date)}</span>
        <span>
          to
          {' '}
          {formatDate(foundVenue?.availability.end_date)}
        </span>
      </Box>
      <Flex gap="1rem">
        {foundVenue?.photos.map((photo: string | undefined, index: number) => (
          <Image
            key={foundVenue?.photos.indexOf(photo as string)}
            src={photo}
            alt={`Venue Image ${index}`}
            maxH="300px"
            objectFit="cover"
            mb={4}
          />
        ))}
      </Flex>
      <Heading as="h2" size="lg" mb={2}>
        Amenities
      </Heading>
      <Box mb={4}>
        <Badge colorScheme="blue" mr={2}>
          Seating for
          {' '}
          {foundVenue?.capacity}
        </Badge>
        <Badge colorScheme="blue" mr={2}>
          Catering Available
        </Badge>
        <Badge colorScheme="blue" mr={2}>
          Audio System
        </Badge>
        <Badge colorScheme="blue" mr={2}>
          Parking Space
        </Badge>
      </Box>
      <Button colorScheme="green" size="lg" as={Link} to="/login">
        Book This Venue
      </Button>
    </Box>
  );
};

export default VenueDetails;
