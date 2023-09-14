import { useNavigate } from 'react-router-dom';
import {
  Image,
  Text,
  HStack,
  Flex,
  IconButton,
  Link,
  useColorMode,
  Button,
  useDisclosure,
  Avatar,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useToast,
} from '@chakra-ui/react';
import { AddIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useAppSelector } from '../../../app/hooks';
import bell from '../../../assets/images/bell.svg';
import avatarWithBackdrop from '../../../assets/images/avatarWithBackdrop.svg';
import { greeting } from '../../../app/functions';
import Box from '../../../components/common/Box';
import authService from '../../../services/auth.service';
import { user } from '../../../interfaces/user';

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
      src={imgsrc}
      alt="profile-pic"
    />

  </HStack>
);

const DashboardHeader = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const navigate = useNavigate();
  const expanded: boolean = useAppSelector(
    (state: { mainSidebar: { value: boolean } }) => state.mainSidebar.value,
  );
  const active = useAppSelector((state: any) => state.mainSidebar.activeItem);
  const currentUser: user = authService.getCurrentUser();

  const isSupport = active === 'Support';
  let w: string;
  if (isSupport) {
    if (expanded) {
      w = '80%';
    } else {
      w = '57%';
    }
  } else if (expanded) {
    w = '80%';
  } else {
    w = '89%';
  }
  function handleLogout() {
    authService.logout();
    toast({
      title: 'Logged Out',
      description: "You've logged out successfully.",
      status: 'warning',
      duration: 9000,
      isClosable: true,
    });
    navigate('/');
  }

  return (
    <Box
      variant="nav"
      className="DashboardHeader"
      position="fixed"
      zIndex={5}
      pt="2rem"
      pb=".5rem"
      top={0}
      right={0}
      w={w}
      pl="3.5"
      minH="98px"
    >
      <Flex alignItems="center" justifyContent="space-between" pr="1rem">
        <HStack pl="1rem" width="auto" alignItems="center" spacing="13rem">
          <WelcomeText text={`${greeting()}, ${currentUser.username}`} />
        </HStack>
        <Flex
          alignItems="center"
          gap="2rem"
          justifyContent="space-between"
          // width="35vw"
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
          <Button
            variant="primary"
            size="sm"
            mr={4}
            leftIcon={<AddIcon />}
          >
            Book Another Venue
          </Button>
          <Menu>
            <MenuButton
              as={Button}
              rounded="full"
              variant="link"
              cursor="pointer"
              minW={0}
            >
              <Avatar
                size="md"
                src={avatarWithBackdrop}
              />
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Profile</MenuItem>
              <MenuDivider />
              <MenuItem onClick={() => handleLogout()}>Log out</MenuItem>
            </MenuList>
          </Menu>

          {/* <UserMix id="hallza0XAA" imgsrc={avatarWithBackdrop} /> */}
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
