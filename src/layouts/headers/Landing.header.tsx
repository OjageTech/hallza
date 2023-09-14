import { useState, useEffect } from 'react';
import 'animate.css';
import { Link as RouteLink } from 'react-router-dom';
import { FaLanguage, FaSun } from 'react-icons/fa';
import { RiMoonLine } from 'react-icons/ri';

import {
  AiOutlineDownCircle,
  AiOutlineUpCircle,
  AiOutlineRight,
} from 'react-icons/ai';
import {
  VStack,
  Grid,
  GridItem,
  Text,
  useColorMode,
  Image,
  Flex,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import Box from '../../components/common/Box';
import HeaderGrid from '../../components/common/HeaderGrid';
import AppName from '../../components/common/AppName';
import US from '../../assets/images/US.png';
import { navRoutes } from '../../routes/routes';
import MainSearch from '../../components/common/MainSearch/MainSearch';

interface PopItemProps {
  name: string;
}

const PopItem = ({ name }: PopItemProps) => (
  <Box
    _hover={{
      cursor: 'pointer',
      borderBottom: '1px solid teal',
    }}
    borderRadius="0"
    borderBottom="1px solid #e5e5e5"
    width="200px"
  >
    <Grid templateColumns="repeat(5, 1fr)" gap={4}>
      <GridItem colSpan={4}>
        <Text>{name}</Text>
      </GridItem>
      <GridItem
        colStart={5}
        colEnd={6}
        _hover={{
          transform: 'translateX(0.5rem)',
        }}
        color="primary"
      >
        <AiOutlineRight />
      </GridItem>
    </Grid>
  </Box>
);

const LandingHeader: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const [navSearchVisible, setNavSearchVisible] = useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    if (scrollPosition > 393) {
      setNavSearchVisible(true);
    } else {
      setNavSearchVisible(false);
    }
  };

  /** This commented out code, would run handleScroll on the scroll event only on (re)-render of component */
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll, { passive: true });
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  window.addEventListener('scroll', handleScroll, { passive: true });

  return (
    <HeaderGrid
      w="100vw"
      pt="1rem"
      pb="0.5rem"
      pl="2.1rem"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={0}
      as="header"
      position="fixed"
      top="0"
      zIndex="overlay"
    >
      {/* <GridItem rowSpan={3} colSpan={1} /> */}
      <GridItem colStart={6} colSpan={3}>
        <Flex justify="space-between" alignItems="center">
          <Text as={RouteLink} to="/">
            <AppName txtDecoration="none" />
          </Text>
          <Flex
            pr="1rem"
            mr="1.5rem"
            boxSizing="border-box"
            gap="1.5rem"
            justifyContent="flex-end"
            justify="space-between"
            alignItems="center"
            flexWrap="wrap"
          >
            <Box className="animate__animated animate__fadeIn" display={navSearchVisible ? 'block' : 'none'}>
              <MainSearch />
            </Box>
            {/* Currency Change */}
            <Button title="Select your currency" variant="ghost">XAF</Button>
            {/* Language change */}
            <Box title="Select your language" h="20px">
              <Image _hover={{ cursor: 'pointer' }} h="100%" src={US} alt="English language" />
            </Box>
            {/* Ability to list your venue */}
            <Button variant="outline" borderColor="primary">Add your venue</Button>
            {/* Already logged in OR is already a member? then go to profile */}
            {/* <Button variant="primary">Go to profile</Button> */}
            {/* Login Options */}
            <Box
              _hover={{ cursor: 'pointer' }}
              display={hovered ? 'none' : 'block'}
              color="primary"
              onMouseOver={handleHover}
            >
              <Flex
                boxSizing="border-box"
                gap="1.5rem"
                justifyContent="center"
                textAlign="center"
                alignItems="center"
                flexWrap="wrap"
              >
                <Text>Login</Text>
                <AiOutlineDownCircle color="inherit" />
              </Flex>
            </Box>
            <Box
              _hover={{ cursor: 'pointer' }}
              display={hovered ? 'block' : 'none'}
              color="primary"
            >
              <Flex
                boxSizing="border-box"
                gap="1.5rem"
                justifyContent="center"
                textAlign="center"
                alignItems="center"
                flexWrap="wrap"
              >
                <Text>Login</Text>
                <AiOutlineUpCircle color="inherit" />
              </Flex>
            </Box>
            <Box
              onMouseLeave={handleHover}
              sx={{
                display: hovered ? 'block' : 'none',
                width: '250px',
                padding: '18px',
                border: '1px solid #bdbdbd',
                borderRadius: '4px',
                height: 'fit-content',
                marginTop: 0,
                position: 'absolute',
                top: '4rem',
                transition: '.2s ease-in-out',
              }}
            >
              <VStack
                width="90%"
                gap="20px"
                textAlign="left"
                alignItems="left"
                justifyContent="left"
              >
                <VStack
                  textAlign="left"
                  alignItems="left"
                  justifyContent="left"
                  width="200px"
                  gap="1rem"
                >
                  <Text fontWeight={500} as="h4">
                    Client
                  </Text>
                  <Box
                    as={RouteLink}
                    to="/Login"
                  >
                    <PopItem name="Login" />

                  </Box>
                  <Box
                    as={RouteLink}
                    to="/signup"
                  >
                    <PopItem name="Create an Account" />
                  </Box>
                </VStack>
                <VStack
                  textAlign="left"
                  alignItems="left"
                  justifyContent="left"
                  width="200px"
                  gap="1rem"
                >
                  <Text fontWeight={500} as="h4">
                    Venue
                  </Text>
                  <Box as={RouteLink} to="/venue-auth">
                    <PopItem name="Login" />
                  </Box>
                  <PopItem name="Book a Call" />
                </VStack>
              </VStack>
            </Box>
            {/* ------ */}
            <IconButton
              aria-label="Toggle dark mode"
              icon={colorMode === 'dark' ? <FaSun /> : <RiMoonLine />}
              onClick={toggleColorMode}
            />
          </Flex>
        </Flex>
      </GridItem>
    </HeaderGrid>
  );
};

export default LandingHeader;
