import { useEffect, useRef, useState } from 'react';
import { Link as RouteLink } from 'react-router-dom';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FaSun } from 'react-icons/fa';
import { RiMoonLine } from 'react-icons/ri';
import {
  Button,
  VStack,
  Flex,
  Text,
  Container,
} from '@chakra-ui/react';
import AppName from '../components/common/AppName';

import Box from '../components/common/Box';
import ProminentFeatures from '../components/ProminentFeatures/ProminentFeatures.component';
import LandingHeader from '../layouts/headers/Landing.header';
import { ROUTE } from '../routes';
import FeaturedVenues from '../components/FeaturedVenues';
import SearchBar from '../components/common/searchbar/Searchbar';

// type NavLinkProps = { text: string };
// const NavLink = ({ text }: NavLinkProps) => (
//   <Link>
//     <Text>{text}</Text>
//   </Link>
// );
type UnderlineDecorType = {
	text: string;
	color: string;
};
const UnderlineDecor = ({ text, color }: UnderlineDecorType) => (
  <Text
    textDecoration="underline"
    textDecorationStyle="dashed"
    textDecorationColor={color}
    as="span"
		>
    {text}
  </Text>
);

function Hero() {
  return (
    <VStack
      alignItems="center"
      textAlign="center"
      gap="1.5rem"
      h="89vh"
      pt="6rem"
      pb="6rem"
      pl="1rem"
      pr="1rem"
      boxSizing="border-box"
    >
      {/* H1 */}
      <Text
        as="h1"
        display="inline-block"
        fontSize={{
          base: '1rem', md: '2.5rem', lg: '1.5rem', xl: '4rem',
        }}
        lineHeight={1}
        fontWeight={900}
      >
        <AppName txtDecoration="underline" />

      </Text>
      <Box w="50vw" pt="4rem">
        <Text
          as="h2"
          fontSize="2.5rem"
          lineHeight="1"
          fontWeight={700}
        >
          Online
          {' '}
          <UnderlineDecor color="#eab308" text="Booking" />
          {' '}
          and
          {' '}
          <UnderlineDecor color="#eab308" text="Invoicing" />
          {' '}
          for your Hall or Venue
        </Text>
        <Text
          as="p"
          fontSize="1.25rem"
          lineHeight="1.75rem"
          opacity=".9"
        >
          Cameroon’s top online reservation system for church
          halls, village halls, clubhouses, community centres and
          all other bookable function rooms.
        </Text>
      </Box>
      <Flex gap="3.5rem">
        <Button
          as={RouteLink}
          to={ROUTE.USER_DASHBOARD}
          variant="primary"
        >
          Free Trial
        </Button>
        <Button
          as={RouteLink}
          to={ROUTE.LOGIN}
          variant="primaryOutline"
        >
          Watch Video
        </Button>
      </Flex>
    </VStack>
  );
}
const Landing = () => (
  <div className="Landing">
    <Container minW="100vw" minH="100vh">
      <LandingHeader />
      <Hero />
      <SearchBar />
      <Box h="2rem" />
      <FeaturedVenues />
      <Box h="2rem" />
      <ProminentFeatures />
    </Container>
  </div>
);

export default Landing;
