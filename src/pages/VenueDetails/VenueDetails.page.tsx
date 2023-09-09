import React from 'react';
import { useParams } from 'react-router-dom';
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
  React.useEffect(() => {
    // Dispatch the fetchVenuesData action when the component mounts
    dispatch(fetchVenuesData());
  }, [dispatch]);
  const { data: venues } = useAppSelector((state) => state.venues);
  // Get Venue id from the URL
  const { id } = useParams();
  let urlID = id || '';
  // Function to search for a venue by id
  const findVenueById = (venueId: string) => {
    const venue = venues.find((indivenue) => indivenue._id === venueId);
    return venue;
  };
  if (id) {
    urlID = id;
  }
  const foundVenue = findVenueById(urlID);
  if (!foundVenue) {
    return <Box>Venue not found</Box>;
  }
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
          <Heading
            as="h1"
            size="xl"
            mb={2}
          >
            {foundVenue?.name}
          </Heading>
          <Badge
            colorScheme="green"
            mb={2}
          >
            Wedding Venue
          </Badge>
          <Text
            color="gray.600"
            fontSize="md"
            mb={4}
          >
            Stunning event venue for weddings, receptions, and special
            occasions.
          </Text>
        </div>
      </Flex>

      <Divider my={4} />
      <Heading
        as="h2"
        size="lg"
        mb={2}
      >
        Venue Details
      </Heading>
      <Text
        fontSize="md"
        mb={4}
      >
        Our elegant event venue can accommodate up to 200 guests. It
        features beautiful architecture, spacious interiors, and
        modern amenities. The venue is equipped with audio and visual
        systems, catering facilities, and ample parking space.
      </Text>
      <Flex gap="1rem">
        {foundVenue?.photos.map((photo: string | undefined) => (
          <Image
            src={photo}
            alt="Venue Image"
            maxH="300px"
            objectFit="cover"
            mb={4}
          />
        ))}
      </Flex>
      <Heading
        as="h2"
        size="lg"
        mb={2}
      >
        Amenities
      </Heading>
      <Box mb={4}>
        <Badge
          colorScheme="blue"
          mr={2}
        >
          Seating for 200
        </Badge>
        <Badge
          colorScheme="blue"
          mr={2}
        >
          Catering Available
        </Badge>
        <Badge
          colorScheme="blue"
          mr={2}
        >
          Audio System
        </Badge>
        <Badge
          colorScheme="blue"
          mr={2}
        >
          Parking Space
        </Badge>
      </Box>
      <Button
        colorScheme="green"
        size="lg"
      >
        Book This Venue
      </Button>
    </Box>
  );
};

export default VenueDetails;
