/* eslint-disable object-curly-newline */
import { useMemo, useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Grid,
  GridItem,
  Image,
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Checkbox,
  useDisclosure,
  CheckboxGroup,
  Stack,
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AiOutlineBackward } from 'react-icons/ai';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { venue } from '../../interfaces/venue';
import girl from '../../assets/images/Edge_Editorial.png';
import lightBottle from '../../assets/images/lightBottle.jpg';
import Packing from '../../assets/images/Packing.jpg';
import LandingHeader from '../../layouts/headers/Landing.header';
import MainSearch from '../../components/common/MainSearch/MainSearch';
import geometricPatterns from '../../assets/images/geometricPatterns.png';
import Footer from '../../layouts/footers/Landing.footer';
import './styles.css';
import { useAppSelector } from '../../app/hooks';
import { fetchVenuesData } from '../../features/venues/venues-slice';

export function FilterBy() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDCuLK99VxIqDi9_RsKVLILpE_lXi6omeo',
  });

  const center = useMemo(
    () => ({ lat: 4.148398399353027, lng: 9.243124008178711 }),
    [],
  );
  return (
    <Box h="fit-content" w="20vw" mt="2.89rem">
      <Box
        mt="1rem"
        mr="6px"
        p="6px"
        h="20vh"
        sx={{
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '10px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(5px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        }}
        w="100%"
      >
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap
            mapContainerClassName="map-container"
            center={center}
            zoom={14}
          >
            <Marker
              position={{ lat: 4.148398399353027, lng: 9.243124008178711 }}
            />
          </GoogleMap>
        )}
      </Box>
      <Box m="6px" border="1px solid gainsboro" borderRadius="md" h="100%">
        <Box borderBottom="1px solid gainsboro" p="6px" w="inherit">
          <Text fontWeight={600}>Filter by:</Text>
        </Box>
        <Box borderBottom="1px solid gainsboro" p="6px" w="inherit">
          <Text fontWeight={600} mb="1rem">
            Popular Filters
          </Text>
          <CheckboxGroup colorScheme="teal">
            <Stack>
              <Checkbox value="inHotels">Venues in Hotels</Checkbox>
              <Checkbox value="airConditioning">Air Conditioning</Checkbox>
              <Checkbox value="hasWifi">Wifi</Checkbox>
              <Checkbox value="hasGen">Standby Generator</Checkbox>
            </Stack>
          </CheckboxGroup>
        </Box>
        <Box borderBottom="1px solid gainsboro" p="6px" w="inherit">
          <Text fontWeight={600}>Venue rating</Text>
          <Text fontSize="12px" mb="1rem">
            Includes stars and other ratings
          </Text>
          <CheckboxGroup colorScheme="teal">
            <Stack>
              <Checkbox value="2Stars">2 stars</Checkbox>
              <Checkbox value="3Stars">3 stars</Checkbox>
              <Checkbox value="4Stars">4 Stars</Checkbox>
              <Checkbox value="5Stars">5 Stars</Checkbox>
              <Checkbox value="unrated">Unrated</Checkbox>
            </Stack>
          </CheckboxGroup>
        </Box>
        <Box borderBottom="1px solid gainsboro" p="6px" w="inherit">
          <Text fontWeight={600} mb="1rem">
            Venue Type
          </Text>
          <CheckboxGroup colorScheme="teal">
            <Stack>
              <Checkbox value="churches">Churches</Checkbox>
              <Checkbox value="outdoorVenues">Outdoor Venues</Checkbox>
              <Checkbox value="banquetHalls">Banquet Halls</Checkbox>
              <Checkbox value="schools">Schools</Checkbox>
              <Checkbox value="resorts">Resorts</Checkbox>
            </Stack>
          </CheckboxGroup>
        </Box>
        <Box borderBottom="1px solid gainsboro" p="6px" w="inherit">
          <Text fontWeight={600} mb="1rem">
            Facilities
          </Text>
          <CheckboxGroup colorScheme="teal">
            <Stack>
              <Checkbox value="parking">Parking</Checkbox>
              <Checkbox value="hasWifi">Free Wifi</Checkbox>
              <Checkbox value="restaurant">Restaurant</Checkbox>
              <Checkbox value="soundSystem">Sound System</Checkbox>
            </Stack>
          </CheckboxGroup>
        </Box>
      </Box>
    </Box>
  );
}
interface AllDetailsI {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  data: venue;
}

function AllDetails({ isOpen, onOpen, onClose, data }: AllDetailsI) {
  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <ModalOverlay sx={{
        background: 'rgba(255, 255, 255, 0.01)',
        borderRadius: '10px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(4px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
      }}
      />
      <ModalContent
        sx={{
          height: '90vh',
          width: '90vw',
          background: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '10px',
          backdropFilter: 'blur(1px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        }}
      >
        <ModalHeader>{data.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          This particular hall has a lot of amenities like tv, pool, guestroom
        </ModalBody>
        <ModalFooter>
          <Button
            variant="primaryOutline"
            background="danger"
            color="white"
            onClick={onClose}
          >
            Go back
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export const Contents = () => {
  useEffect(() => {
    fetchVenuesData();
  }, []);
  const { data: venues } = useAppSelector((state) => state.venues);
  console.log(`Venues from state: ${venues}`);
  // async function fetchData() {
  //   try {
  //     const response = await axios.get('http://localhost:3000/venues');
  //     setVenueData(response.data); // Do something with the retrieved data
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);
  const navigate = useNavigate();
  const handleClickDetails = (id: string) => {
    navigate(`/venue-details/${id}`);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      borderRadius="28px"
      mt="4rem"
      flexDir="column"
      gap="1rem"
    >
      {venueData.map((data: venue) => (
        <Flex
          key={data.name}
          borderRadius="10px"
          h="fit-content"
          backgroundColor="white"
          boxShadow="md"
          w="70vw"
          onClick={() => handleClickDetails(data._id)}
        >
          <Box
            h="25vh"
            w="20vw"
            boxShadow="lg"
            _hover={{
              cursor: 'pointer',
            }}
          >
            <Image
              borderLeftRadius="10px"
              h="100%"
              w="100%"
              objectFit="cover"
              src={data.photos[1]}
            />
          </Box>
          <Box pl=".5rem" pr=".5rem" mt=".7rem" textAlign="center">
            <Flex alignItems="center" justifyContent="space-between">
              <Flex alignItems="center" gap="5px">
                <Box border=".5px solid gainsboro" borderRadius="50%" h="20px" w="20px">
                  <Image objectFit="cover" h="100%" w="100%" borderRadius="50%" src={data.photos[1]} />
                </Box>
                <Text fontWeight={700} fontSize="21px">{data.name}</Text>
                <Text>{data.location.city}</Text>
              </Flex>
            </Flex>
            <Text mt=".7rem" fontSize="13px">
              Starting from
              {' '}
              <strong>
                XAF
                {' '}
                {data.price_per_day}
              </strong>
              /day
            </Text>
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};
const FindnBrowseVenues = () => (
  <Box maxW="100vw" h="100vh">
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
      <Checkbox colorScheme="teal" mt="1rem" color="white">
        I'm booking for my company
      </Checkbox>
    </Box>
    <Flex w="95vw" ml="2.1rem" mb="2.1rem" gap="1ch">
      <FilterBy />
      <Contents />
    </Flex>
    <Footer />
  </Box>
);

export default FindnBrowseVenues;
