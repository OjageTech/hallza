import {
  Box,
  Image,
  Text,
  Stack,
  HStack,
  Center,
  Flex,
} from '@chakra-ui/react';
import logo from '../../../assets/images/logo192.png';
import bell from '../../../assets/images/bell.svg';
import avatarWithBackdrop from '../../../assets/images/avatarWithBackdrop.svg';
import Searchbar from '../../../components/common/searchbar/Searchbar';

type WelcomeTextProps = { text: string };
const WelcomeText = ({ text }: WelcomeTextProps) => (
  <Text
    fontWeight={600}
    fontSize="24px"
  >
    {text}
  </Text>
);

type UserMixProps = { id: string; imgsrc: string };
const UserMix = ({ id, imgsrc }: UserMixProps) => (
  <HStack spacing="2rem">
    <Text
      fontWeight={300}
      fontSize="16px"
    >
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
const DashboardHeader = () => (
  <div className="DashboardHeader">
    <Box
      w="100%"
      pt="3.5"
      pl="3.5"
      maxH="sm"
      overflow="hidden"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
      >
        <Image
          ml="4rem"
          width="40px"
          height="40px"
          src={logo}
          alt="TTDIA-MLM"
        />
        <HStack
          pl="3.5rem"
          width="auto"
          alignItems="center"
          spacing="13rem"
        >
          <WelcomeText text="Hi, Nneka Obi" />
          <Searchbar />
        </HStack>
        <Flex
          alignItems="center"
          pr="4rem"
          justifyContent="space-between"
          width="25vw"
        >
          <Image
            _hover={{
              cursor: 'pointer',
            }}
            width="24px"
            height="24px"
            src={bell}
            alt="notification bell"
          />
          <UserMix
            id="TTDIA0XAA"
            imgsrc="avatarWithBackdrop"
          />
        </Flex>
      </Flex>
    </Box>
  </div>
);

export default DashboardHeader;
