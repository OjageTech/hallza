/* eslint-disable no-nested-ternary */

'use client';

import { useParams } from 'react-router-dom';
import { useState } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  useToast,
  Container,
  Text,
  Image,
  Stack,
} from '@chakra-ui/react';
import LandingHeader from '../../layouts/headers/Landing.header';
import { useAppSelector } from '../../app/hooks';

const Form1 = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Heading w="50%" textAlign="center" fontWeight="normal" mb="2%">
        <Flex justifyContent="space-between">
          <Flex
            borderRadius="50%"
            h="40px"
            w="40px"
            border="1px solid grey"
            alignItems="center"
            justifyContent="center"
          >
            2
          </Flex>
          <Text>User Registration</Text>
        </Flex>
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight="normal">
            First name*
          </FormLabel>
          <Input id="first-name" placeholder="First name" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight="normal">
            Last name*
          </FormLabel>
          <Input id="last-name" placeholder="First name" />
        </FormControl>
      </Flex>

    </>
  );
};

const Form2 = () => (
  <>
    <Heading w="100%" textAlign="center" fontWeight="normal" mb="2%">
      User Details
    </Heading>
    <FormControl as={GridItem} colSpan={[6, 3]}>
      <FormLabel
        htmlFor="country"
        fontSize="sm"
        fontWeight="md"
        color="gray.700"
        _dark={{
          color: 'gray.50',
        }}
      >
        Country / Region
      </FormLabel>
      <Select
        id="country"
        name="country"
        autoComplete="country"
        placeholder="Select option"
        focusBorderColor="brand.400"
        shadow="sm"
        size="sm"
        w="full"
        rounded="md"
      >
        <option>United States</option>
        <option>Canada</option>
        <option>Mexico</option>
      </Select>
    </FormControl>

    <FormControl as={GridItem} colSpan={6}>
      <FormLabel
        htmlFor="street_address"
        fontSize="sm"
        fontWeight="md"
        color="gray.700"
        _dark={{
          color: 'gray.50',
        }}
        mt="2%"
      >
        Street address
      </FormLabel>
      <Input
        type="text"
        name="street_address"
        id="street_address"
        autoComplete="street-address"
        focusBorderColor="brand.400"
        shadow="sm"
        size="sm"
        w="full"
        rounded="md"
      />
    </FormControl>

    <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
      <FormLabel
        htmlFor="city"
        fontSize="sm"
        fontWeight="md"
        color="gray.700"
        _dark={{
          color: 'gray.50',
        }}
        mt="2%"
      >
        City
      </FormLabel>
      <Input
        type="text"
        name="city"
        id="city"
        autoComplete="city"
        focusBorderColor="brand.400"
        shadow="sm"
        size="sm"
        w="full"
        rounded="md"
      />
    </FormControl>

    <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
      <FormLabel
        htmlFor="state"
        fontSize="sm"
        fontWeight="md"
        color="gray.700"
        _dark={{
          color: 'gray.50',
        }}
        mt="2%"
      >
        State / Province
      </FormLabel>
      <Input
        type="text"
        name="state"
        id="state"
        autoComplete="state"
        focusBorderColor="brand.400"
        shadow="sm"
        size="sm"
        w="full"
        rounded="md"
      />
    </FormControl>

    <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
      <FormLabel
        htmlFor="postal_code"
        fontSize="sm"
        fontWeight="md"
        color="gray.700"
        _dark={{
          color: 'gray.50',
        }}
        mt="2%"
      >
        ZIP / Postal
      </FormLabel>
      <Input
        type="text"
        name="postal_code"
        id="postal_code"
        autoComplete="postal-code"
        focusBorderColor="brand.400"
        shadow="sm"
        size="sm"
        w="full"
        rounded="md"
      />
    </FormControl>
  </>
);

const Form3 = () => (
  <>
    <Heading w="100%" textAlign="center" fontWeight="normal">
      Social Handles
    </Heading>
    <SimpleGrid columns={1} spacing={6}>
      <FormControl as={GridItem} colSpan={[3, 2]}>
        <FormLabel
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
        >
          Website
        </FormLabel>
        <InputGroup size="sm">
          <InputLeftAddon
            bg="gray.50"
            _dark={{
              bg: 'gray.800',
            }}
            color="gray.500"
            rounded="md"
          >
            http://
          </InputLeftAddon>
          <Input
            type="tel"
            placeholder="www.example.com"
            focusBorderColor="brand.400"
            rounded="md"
          />
        </InputGroup>
      </FormControl>

      <FormControl id="email" mt={1}>
        <FormLabel
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
        >
          About
        </FormLabel>
        <Textarea
          placeholder="you@example.com"
          rows={3}
          shadow="sm"
          focusBorderColor="brand.400"
          fontSize={{
            sm: 'sm',
          }}
        />
        <FormHelperText>
          Brief description for your profile. URLs are hyperlinked.
        </FormHelperText>
      </FormControl>
    </SimpleGrid>
  </>
);

function Multistep() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);

  return (
    <Box
      borderWidth="1px"
      rounded="md"
      shadow="sm"
      maxWidth={800}
      p={6}
      m="10px auto"
      as="form"
    >
      <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated />
      {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
      <ButtonGroup mt="5%" w="100%">
        <Flex w="100%" justifyContent="space-between">
          <Flex>
            <Button
              onClick={() => {
                setStep(step - 1);
                setProgress(progress - 33.33);
              }}
              isDisabled={step === 1}
              colorScheme="teal"
              variant="solid"
              w="7rem"
              mr="5%"
            >
              Back
            </Button>
            <Button
              w="7rem"
              isDisabled={step === 3}
              onClick={() => {
                setStep(step + 1);
                if (step === 3) {
                  setProgress(100);
                } else {
                  setProgress(progress + 33.33);
                }
              }}
              colorScheme="teal"
              variant="outline"
            >
              Next
            </Button>
          </Flex>
          {step === 3 ? (
            <Button
              w="fit-content"
              colorScheme="whatsapp"
              variant="solid"
              onClick={() => {
                toast({
                  title: 'Paid.',
                  description: "You've paid!!!",
                  status: 'success',
                  duration: 3000,
                  isClosable: true,
                });
              }}
            >
              Continue to payment
            </Button>
          ) : null}
        </Flex>
      </ButtonGroup>
    </Box>
  );
}

export default function Booking() {
  const { data: venues } = useAppSelector((state) => state.venues);
  const { id } = useParams();
  const urlID = id || '';
  const findVenueById = (venueId: string) => venues.find((indivenue) => indivenue._id === venueId);

  const foundVenue = findVenueById(urlID);

  if (!foundVenue) {
    return <Box>Venue not found</Box>;
  }
  return (
    <>
      <LandingHeader />
      <Flex mt="5rem" ml="2.1rem" w="80%" justifyContent="space-between">
        <Box>
          <Flex mb="1rem" gap="1rem" alignItems="center">
            <Flex
              borderRadius="50%"
              h="40px"
              w="40px"
              border="1px solid grey"
              alignItems="center"
              justifyContent="center"
            >
              1
            </Flex>
            <Heading fontWeight="normal" as="h1">
              {' '}
              Review your itinerary
            </Heading>
          </Flex>
          <Box
            mt="1rem"
            h={{ base: '100%', md: '20vh' }}
            w={{ base: '100%', md: '40vw' }}
            boxShadow="xs"
            borderRadius="md"
          >
            <Flex
              h="100%"
              w={{ base: '100%', md: '33vw' }}
              justifyContent="space-between"
              p=".5rem"
              alignItems="center"
            >
              <Image
                h="100%"
                src={foundVenue?.photos[1]}
                alt={`${foundVenue?.name}-display image`}
                objectFit="cover"
              />
              <Box>
                <Text fontSize="2xl">{foundVenue?.name}</Text>
                <Text>
                  {foundVenue?.location.country}
                  ,
                  {' '}
                  {foundVenue?.location.city}
                </Text>
              </Box>
            </Flex>
            <Box mt="2rem">
              <Heading>Availability</Heading>
              <Flex w="60%" alignItems="center" justify="space-between">
                <Stack>
                  <Text fontSize="sm">From</Text>
                  <Text fontSize="lg" fontWeight="bold">
                    {foundVenue?.availability.start_date}
                  </Text>
                </Stack>
                <Text fontWeight="semibold" fontSize="sm">
                  24/7
                </Text>
                <Stack>
                  <Text fontSize="sm">To</Text>
                  <Text fontSize="lg" fontWeight="bold">
                    {foundVenue?.availability.end_date}
                  </Text>
                </Stack>
              </Flex>
            </Box>
          </Box>
          <Box mt="10rem">
            <Multistep />
          </Box>
        </Box>
        <Box p="1rem" background="white" boxShadow="xs" borderRadius="md" pos="fixed" right="2.5rem">
          <Flex fontSize="2xl" gap="2px">
            <Text>Total Price:</Text>
            <Text>
              XAF
              {' '}
              {foundVenue?.price_per_day}
            </Text>
          </Flex>
        </Box>
      </Flex>

      {/* <Button variant="primary">
        Continue to payment
      </Button> */}
    </>
  );
}
