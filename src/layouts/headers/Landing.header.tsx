import { useState, useEffect } from 'react';
import 'animate.css';
import { Link as RouteLink } from 'react-router-dom';
import { FaSun } from 'react-icons/fa';
import { RiMoonLine } from 'react-icons/ri';

import {
  AiOutlineDownCircle,
  AiOutlineUpCircle,
  AiOutlineRight,
} from 'react-icons/ai';
import {
  Button,
  IconButton,
  VStack,
  Flex,
  Grid,
  GridItem,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import Box from '../../components/common/Box';
import HeaderGrid from '../../components/common/HeaderGrid';
import AppName from '../../components/common/AppName';
import { navRoutes } from '../../routes/routes';

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
    as={RouteLink}
    to="/Login"
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
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderGrid
      w="100vw"
      pt="1rem"
      pb="0.5rem"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={0}
      as="header"
      position="fixed"
      top="0"
      zIndex="overlay"
    >
      {/* <GridItem rowSpan={3} colSpan={1} /> */}
      <GridItem
        colStart={6}
        colSpan={3}
      >
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
          <Text
            className="animate__animated animate__backInDown"
            pr="3rem"
            sx={{
              display: 'grid',
              gridTemplateColumns: '3fr',
              gridTemplateRows: 'auto',
              gridGap: '30px',
              margin: '0 auto',
              maxWidth: '960px',
              '@media screen and (max-width: 700px)': {
                gridTemplateColumns: '1fr 5fr',
                columnSpan: '4',
                gridTemplateRows: 'auto',
              },
              '@media screen and (min-width: 700px)': {
                gridTemplateColumns: '1fr 8fr',
                columnSpan: '4',
                gridTemplateRows: 'auto',
              },
            }}
            as="h1"
            fontSize={{
              base: '.5rem',
              md: '1rem',
              lg: '1rem',
              xl: '1.5rem',
            }}
            lineHeight={0}
            fontWeight={900}
          >
            <AppName txtDecoration="none" />
          </Text>
          <Button variant="primary">Go to profile</Button>
          {/* <Box
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
                <Text
                  fontWeight={500}
                  as="h4"
                >
                  Client
                </Text>
                <PopItem name="Login" />
                <PopItem name="Create an Account" />
              </VStack>
              <VStack
                textAlign="left"
                alignItems="left"
                justifyContent="left"
                width="200px"
                gap="1rem"
              >
                <Text
                  fontWeight={500}
                  as="h4"
                >
                  Venue
                </Text>
                <PopItem name="Login" />
                <PopItem name="Book a Call" />
              </VStack>
            </VStack>
          </Box>
          */}
          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === 'dark' ? <FaSun /> : <RiMoonLine />}
            onClick={toggleColorMode}
          />
        </Flex>
      </GridItem>
    </HeaderGrid>
  );
};

export default LandingHeader;
