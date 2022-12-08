import {
  Image,
  Text,
  HStack,
  Flex,
  IconButton,
  Link,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import bell from '../../../assets/images/bell.svg';
import avatarWithBackdrop from '../../../assets/images/avatarWithBackdrop.svg';
import { greeting } from '../../../app/functions';
import Box from '../../../components/common/Box';

type WelcomeTextProps = { text: string };
const WelcomeText = ({ text }: WelcomeTextProps) => (
  <Text textTransform="capitalize" fontWeight={600} fontSize="24px">
    {text}
  </Text>
);

type UserMixProps = { id: string; imgsrc: string };
const UserMix = ({ id, imgsrc }: UserMixProps) => (
  <HStack spacing="2rem">
    <Text fontWeight={300} fontSize="16px">
      {id}
    </Text>
    <Image
      width="39px"
      height="39px"
      src={avatarWithBackdrop}
      alt="profile-pic"
    />
  </HStack>
);
const DashboardHeader = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      variant="nav"
      className="DashboardHeader"
      position="fixed"
      zIndex={4}
      pt="2rem"
      pb=".5rem"
      top={0}
      right={0}
      w="75%"
      pl="3.5"
      minH="98px"
      overflow="hidden"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <HStack
          pl="3.5rem"
          width="auto"
          alignItems="center"
          spacing="13rem"
        >
          <WelcomeText text={`${greeting()} Nneka`} />
        </HStack>
        <Flex
          alignItems="center"
          pr="4rem"
          justifyContent="space-between"
          width="25vw"
        >
          {/* <Searchbar
						groupHeight="58px"
						paddingLeftInputLeft="5"
						heightInputLeft="50px"
            pl='4rem'
            inputHeight='50px'
            fontSize='16px'
            variant='flushed'
            inputWidth='320px'
            borderRadius='10px'
            placeholder='Search'
            bg='primary'
					/> */}

          <Image
            _hover={{
						  cursor: 'pointer',
            }}
            width="24px"
            height="24px"
            src={bell}
            alt="notification bell"
          />
          <UserMix id="TTDIA0XAA" imgsrc="avatarWithBackdrop" />
          <IconButton
            icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
            variant="outline"
            colorScheme="purple"
            aria-label="Color mode switcher"
            onClick={toggleColorMode}
          >
            Switch Mode
          </IconButton>
        </Flex>
      </Flex>
    </Box>
  );
};

export default DashboardHeader;
