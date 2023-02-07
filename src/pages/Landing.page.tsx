import React, { useState, RefObject } from 'react';
import { Link as RouteLink } from 'react-router-dom';
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
} from '@chakra-ui/react';
import rentApart from '../assets/images/rent_apart.svg';

import Box from '../components/common/Box';
import ProminentFeatures from '../components/ProminentFeatures/ProminentFeatures.component';
import LandingHeader from '../layouts/headers/Landing.header';
import { ROUTE } from '../routes';
import FeaturedVenues from '../components/FeaturedVenues';
import SearchBar from '../components/common/searchbar/Searchbar';
import PreSearch from '../components/common/searchbar/PreSearch';
import PostSearch from '../components/common/searchbar/PostSearch';
import SearchSection from '../components/common/searchbar';

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

const ToNextSectionButton: React.FC<ToNextSectionButtonProps> = ({ sectionId, onClick }) => (
  <Box position="relative" h="40vh" w="54vw">
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
        borderImage: 'linear-gradient(to bottom, #14B8A6 50%, #8B5CF6 50%) 1',
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
}
function Hero({ sectionId }: HeroInterface) {
  const [scrollToNextSection, setScrollToNextSection] = useState(false);
  const scrollRef: RefObject<HTMLDivElement> = React.createRef();

  const handleClick = () => {
    // setScrollToNextSection(true);
    // const section = document.querySelector(`#${sectionId}`);
    // section?.scrollIntoView({ behavior: 'smooth' });
    const inputElement = document.querySelector('input[type="text"]'); // not found
    let scrollPosition = 800;
    if (inputElement instanceof HTMLInputElement) {
      inputElement.focus(); // not doing anytin
      scrollPosition = window.pageYOffset + inputElement.offsetTop - 100;
    }

    // Scroll to the desired position
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    });
  };

  React.useEffect(() => {
    if (scrollToNextSection && scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
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
      <Grid gap={57}>
        <GridItem colSpan={2}>
          <Image w={493} h={375} src={rentApart} />
        </GridItem>
        <GridItem w={575} colStart={4} colEnd={6}>
          <Box pt="4rem">
            <Text
              as="h2"
              fontSize="2.5rem"
              lineHeight="1"
              fontWeight={400}
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
              fontWeight={300}
            >
              Cameroon’s top online reservation system for church
              halls, village halls, clubhouses, community centres and
              all other bookable function rooms.
            </Text>
          </Box>
          <Flex mt={8} gap="3.5rem">
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
        </GridItem>
      </Grid>
      <ToNextSectionButton sectionId={sectionId} onClick={handleClick} />
    </VStack>
  );
}

const Landing = () => {
  const a = '&lt';
  const [sectionId, setSectionId] = useState('heroSection');
  return (
    <div className="Landing">
      <Container minW="100vw" minH="100vh">
        <LandingHeader />
        <Hero sectionId={sectionId} />
        <SearchSection />

        <Box h="2rem" />
        <FeaturedVenues />
        <Box h="2rem" />
        <ProminentFeatures />
      </Container>
    </div>
  );
};

export default Landing;
