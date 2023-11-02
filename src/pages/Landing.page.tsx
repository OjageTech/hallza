import React, { useState, RefObject } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import 'animate.css';
import {
  Button,
  VStack,
  Flex,
  Grid,
  GridItem,
  Text,
  Container,
  Image,
  Checkbox,
} from '@chakra-ui/react';
import rentApart from '../assets/images/rent_apart.svg';

import Box from '../components/common/Box';
import HallzaBanner from '../components/HallzaBanner/HallzaBanner.component';
import ProminentCanDos from '../components/CanDos/CanDos.component';
// import ProminentFeatures from '../components/ProminentFeatures/ProminentFeatures.component';
import LandingHeader from '../layouts/headers/Landing.header';
import Footer from '../layouts/footers/Landing.footer';
import { ROUTE } from '../routes';
import CallToAddVenues from '../components/CallToAddVenues/CallToAddVenues';
import CallToViewAllServices from '../components/CallToViewAllServices/CallToViewAllServices';
import CallToFindVenues from '../components/CallToFindVenues/CallToFindVenues';

import SearchBar from '../components/common/searchbar/Searchbar';
import PreSearch from '../components/common/searchbar/PreSearch';
import PostSearch from '../components/common/searchbar/PostSearch';
import SearchSection from '../components/common/searchbar';
import MainSearch from '../components/common/MainSearch/MainSearch';
import Offers from '../components/Offers/Offers';
import Newsletter from '../components/Newsletter/Newsletter';
import BrowseByType from '../components/BrowseByType/BrowseByType';

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

interface ToNextSectionButtonProps {
  sectionId: string;
  onClick: () => void;
}

const ToNextSectionButton: React.FC<ToNextSectionButtonProps> = ({
  sectionId,
  onClick,
}) => (
  <Box
    position="relative"
    h="40vh"
    w="54vw"
  >
    <Button
      className="animate__animated animate__pulse animate__infinite"
      fontSize="20px"
      w={400}
      fontWeight={300}
      h="48px"
      position="absolute"
      top="80%"
      variant="primaryOutline"
      right="25%"
      transform="translate(60%, 2%, 1%)"
      border="1px solid red"
      sx={{
        borderImage:
          'linear-gradient(to bottom, #14B8A6 50%, #8B5CF6 50%) 1',
        borderRadius: 5,
      }}
      onClick={onClick}
    >
      Find a Venue
    </Button>
  </Box>
);
type HeroInterface = {
  sectionId: string;
};
function Hero({ sectionId }: HeroInterface) {
  const [scrollToNextSection, setScrollToNextSection] = useState(false);
  const scrollRef: RefObject<HTMLDivElement> = React.createRef();

  React.useEffect(() => {
    if (scrollToNextSection && scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
      window.scrollBy(0, window.innerHeight);
    }
  }, [scrollToNextSection, scrollRef]);

  return (
    <VStack
      h="100vh"
      alignItems="center"
      textAlign="left"
      gap="1.5rem"
      w="100%"
      pt="8rem"
      pb="6rem"
      pl="1rem"
      pr="1rem"
      boxSizing="border-box"
    >
      <Flex
        w={{ base: '100%', md: '66%' }}
        justifyContent="space-between"
        gap="4rem"
      >
        <Box
          h={375}
          display={{ base: 'none', md: 'block' }}
          // w={493}
        >
          <Image
            w="100%"
            h="100%"
            src={rentApart}
          />
        </Box>
        <Box
          w={{ base: '100%', md: 575 }}
        >
          <Box pt={{ base: '0', md: '4rem' }}>
            <Text
              as="h2"
              fontSize={{ base: '2rem', md: '2.5rem' }}
              fontWeight={{ base: '500', md: '400' }}
              lineHeight="1"
            >
              Online
              {' '}
              <UnderlineDecor
                color="secondary"
                text="Booking"
              />
              {' '}
              and
              {' '}
              <UnderlineDecor
                color="secondary"
                text="Invoicing"
              />
              {' '}
              for your Hall or Venue
            </Text>
            <Text
              as="p"
              fontSize={{ base: '1rem', md: '1.25rem' }}
              lineHeight={{ base: 'auto', md: '1.75rem' }}
              opacity=".9"
              fontWeight={300}
            >
              Cameroon’s top online reservation system for church
              halls, village halls, clubhouses, community centres and
              all other bookable function rooms.
            </Text>
          </Box>
          <Box
            mt={8}
          >
            <MainSearch />
          </Box>
          <Checkbox mt="1rem" colorScheme="teal">I'm booking for my company</Checkbox>
        </Box>
      </Flex>
      <ProminentCanDos />
    </VStack>
  );
}

const Landing = () => {
  const [sectionId, setSectionId] = useState('heroSection');
  return (
    <div className="Landing">
      <Helmet>
        <title>Hallza - Your Ultimate Event Space Booking Platform</title>
        <meta name="description" content="Discover and Book the Perfect Event Space with OJAGETECHNOLOGIES" />
        <meta name="keywords" content="event space, venue booking, hall rental, event planning, Cameroon OJAGETECHNOLOGIES" />
      </Helmet>
      <Container
        minW="100vw"
        minH="100vh"
        p={0}
      >
        <LandingHeader />
        <Hero sectionId={sectionId} />
        <Offers />
        <BrowseByType />
        <HallzaBanner />
        {/* <CallToFindVenues /> */}
        {/* <CallToAddVenues /> */}
        {/* <CallToViewAllServices /> */}
        {/* <Box h="2rem" /> */}
        <Newsletter />
        {/* <SearchSection /> */}
        {/* <FeaturedVenues /> */}
        {/* <Box h="2rem" />
        <ProminentFeatures /> */}
        <Footer />
      </Container>
    </div>
  );
};

export default Landing;
