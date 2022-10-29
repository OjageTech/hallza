import { Link as RouteLink } from 'react-router-dom';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Button,
  Center,
  IconButton,
  Stack,
  Link,
  Text,
  useColorMode,
} from '@chakra-ui/react';

// type NavLinkProps = { text: string };
// const NavLink = ({ text }: NavLinkProps) => (
//   <Link>
//     <Text>{text}</Text>
//   </Link>
// );

const Landing = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div className="Landing">
      <Center
        h="100vh"
        maxW="120px"
        mx="auto"
      >
        <Stack isInline>
          <IconButton
            icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
            variant="outline"
            colorScheme="purple"
            aria-label="Color mode switcher"
            onClick={toggleColorMode}
          >
            Switch Mode
          </IconButton>
          <Button
            as={RouteLink}
            to="/"
            variant="outline"
            colorScheme="blue"
          >
            TeksTedia MLM [TTDIA-MLM]
          </Button>
          <Button
            as={RouteLink}
            to="/userDashboard"
            variant="primary"
          >
            User Dashboard
          </Button>
          <Button
            disabled
            variant="secondary"
          >
            Admin Dashboard
          </Button>
          <Button variant="primaryOutline">Login</Button>
          <Button variant="primaryOutline">Signup</Button>
        </Stack>
      </Center>
    </div>
  );
};

export default Landing;
