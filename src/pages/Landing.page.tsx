import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Button,
  Center,
  IconButton,
  Stack,
  useColorMode,
} from '@chakra-ui/react';

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
            variant="outline"
            colorScheme="blue"
          >
            TeksTedia MLM [TTDIA-MLM]
          </Button>
          <Button
            variant="solid"
            bg="primary"
          >
            Primary
          </Button>
          <Button
            variant="solid"
            bg="secondary"
          >
            Secondary
          </Button>
          <Button
            variant="solid"
            bg="danger"
          >
            Danger!
          </Button>
        </Stack>
      </Center>
    </div>
  );
};

export default Landing;
