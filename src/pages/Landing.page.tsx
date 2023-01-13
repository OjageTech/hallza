import {useEffect, useRef, useState} from 'react';
import { Link as RouteLink } from 'react-router-dom';
import {useAnimation, motion, useScroll} from "framer-motion";
import {useInView} from "react-intersection-observer"
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

const AppNameVariants = {
  visible: {opacity:1, scale:4, transition: {duration:1}},
  hidden: {opacity:0, scale:0}
}

function AppName() {
  

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if(inView){
      controls.start("visible");
    }
  }, [controls, inView])
  return(
    <motion.div
      animate={{scale:2}}
      initial="visible"
      variants={AppNameVariants}>
      <Box
      textDecoration="underline"
      textUnderlineOffset="1rem"
      textDecorationColor="#e5e7eb"
      sx={{
        // /* Fallback: Set a background color. */
        backgroundColor: 'teal',

        /* Create the gradient. */
        backgroundImage: 'linear-gradient(to right,#14b8a6,#8b5cf6)',

        /* Set the background size and repeat properties. */
        backgroundSize: '100%',
        backgroundRepeat: 'repeat',

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
    </motion.div>
  )
}
function Hero() {

  return (<VStack
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
    <AppName />

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
  </VStack>)
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
