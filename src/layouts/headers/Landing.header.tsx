import { useState, useEffect } from 'react';
import 'animate.css';
import { Link as RouteLink } from 'react-router-dom';
import { FaLanguage, FaSun } from 'react-icons/fa';
import { RiMoonLine } from 'react-icons/ri';

import {
  AiOutlineDownCircle,
  AiOutlineUpCircle,
  AiOutlineRight,
  AiOutlineProfile,
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
  Select,
} from '@chakra-ui/react';
import { AddIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { BsCurrencyExchange } from 'react-icons/bs';
import { MdOutlineLanguage } from 'react-icons/md';
import Box from '../../components/common/Box';
import HeaderGrid from '../../components/common/HeaderGrid';
import AppName from '../../components/common/AppName';
import US from '../../assets/images/US.png';
import { navRoutes } from '../../routes/routes';
import MainSearch from '../../components/common/MainSearch/MainSearch';
import authService from '../../services/auth.service';
import { user } from '../../interfaces/user';

const currenciesAllowed = [
  'XAF', 'USD', 'Euro',
];
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
    width="100%"
  >
    <Flex alignItems="center" justifyContent="space-between">
      <Box>
        <Text>{name}</Text>
      </Box>
      <Box
        _hover={{
          transform: 'translateX(0.5rem)',
        }}
        color="primary"
      >
        <AiOutlineRight />
      </Box>
    </Flex>
  </Box>
);

function MobileNav() {
  const currentUser: user = authService.getCurrentUser();
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack
      p={4}
      display={{
        md: 'none',
      }}
    >
      <Box>
        <Box w="97%">

          {
            /* Currency Change */
          }
          <Select variant="flushed" placeholder="Change Currency" icon={<BsCurrencyExchange />}>
            <option value="xaf">XAF</option>
            <option value="usd">USD</option>
            <option value="euro">Euro</option>
          </Select>
          {
            /* Language change */
          }
          <Select variant="flushed" placeholder="Change Language" icon={<MdOutlineLanguage />}>
            <option value="option1">English</option>
            <option value="option2">French</option>
            <option value="option3">Japanese</option>
          </Select>
        </Box>
        {
          /* Ability to login */
        }
        {
          !currentUser
            ? (
              <Box
                w="95%"
                onClick={onToggle}
                _hover={{ cursor: 'pointer' }}
              >
                <Flex
                  py={4}
                  boxSizing="border-box"
                  color="primary"
                  justifyContent="space-between"
                  gap="1.5rem"
                  alignItems="center"
                  flexWrap="wrap"
                >
                  <Text>Login</Text>
                  <AiOutlineDownCircle color="inherit" />
                </Flex>
              </Box>
            )
            : (
              <>
                <br />
                <Button as={RouteLink} to="/userDashboard" variant="primary" leftIcon={<AiOutlineProfile />} borderColor="primary">Go to Profile</Button>
                <br />
                <br />
              </>
            )
        }

        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle="solid"
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align="start"
          >
            <VStack
              width="100%"
              gap="20px"
              textAlign="left"
              alignItems="left"
              justifyContent="left"
            >
              <VStack
                textAlign="left"
                alignItems="left"
                justifyContent="left"
                w="95%"
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
                width="95%"
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
          </Stack>
        </Collapse>
        <Button variant="primaryOutline" leftIcon={<AddIcon />} borderColor="primary">Add your venue</Button>
      </Box>

    </Stack>
  );
}
const LandingHeader: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();
  const [hovered, setHovered] = useState(false);
  const [defaultCur, setDefaultCur] = useState('XAF');
  const [wannaChangeCurrency, setWannaChangeCurrency] = useState(false);
  const currentUser: user = authService.getCurrentUser();

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

  /** This commented out code, would have run handleScroll on the scroll event only on (re)-render of component */
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
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}
          >
            <IconButton
              onClick={onToggle}
              icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
              variant="ghost"
              aria-label="Toggle Navigation"
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} as={RouteLink} to="/">
            <AppName txtDecoration="none" />
          </Flex>
          {/* Desktop display this . . . */}
          <Flex
            display={{ base: 'none', md: 'flex' }}
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
            <Button title="Select your currency" variant={wannaChangeCurrency ? 'primaryOutline' : 'ghost'} onClick={() => setWannaChangeCurrency(!wannaChangeCurrency)}>{defaultCur}</Button>
            <Box
              display={wannaChangeCurrency ? 'block' : 'none'}
              onClick={() => setWannaChangeCurrency(false)}
              onMouseLeave={() => setWannaChangeCurrency(false)}
              sx={{
                width: 'auto',
                padding: '18px',
                border: '1px solid #bdbdbd',
                borderRadius: '4px',
                height: 'fit-content',
                marginTop: 0,
                position: 'absolute',
                top: '4rem',
                right: '30%',
                transition: '.2s ease-in-out',
              }}
            >
              <VStack
                textAlign="left"
                alignItems="left"
                justifyContent="left"
                width="auto"
                gap="1rem"
              >
                {
                  currenciesAllowed.map((cur) => <Box bgColor={defaultCur === cur ? 'teal' : 'transparent'} onClick={() => setDefaultCur(cur)}><PopItem name={cur} /></Box>)
                }
              </VStack>
            </Box>
            {/* Language change */}
            <Box title="Select your language" h="20px">
              <Image _hover={{ cursor: 'pointer' }} h="100%" src={US} alt="English language" />
            </Box>
            {/* Ability to list your venue */}
            <Button variant="outline" borderColor="primary">Add your venue</Button>
            {/* Already logged in OR is already a member? then go to profile */}
            {
              currentUser
                ? <Button as={RouteLink} to="/userDashboard" variant="primary">Go to profile</Button>
                : (
                  // {/* Login Options */}
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
                )
            }
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

          <Stack
            display={{ base: 'flex', md: 'none' }}
            flex={{ base: 1, md: 0 }}
            justify="flex-end"
            pr="2.1rem"
            direction="row"
            spacing={6}
          >
            {/* Toggle Light/dark mode */}
            <IconButton
              aria-label="Toggle dark mode"
              icon={colorMode === 'dark' ? <FaSun /> : <RiMoonLine />}
              onClick={toggleColorMode}
            />
          </Stack>
        </Flex>
      </GridItem>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </HeaderGrid>
  );
};

export default LandingHeader;
