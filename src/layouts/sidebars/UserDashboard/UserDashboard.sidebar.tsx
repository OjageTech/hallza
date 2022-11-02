import { Link as RouteLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Box,
  Image,
  Text,
  Stack,
  HStack,
  Center,
  Flex,
  VStack,
  Badge,
} from '@chakra-ui/react';
import dashboard from '../../../assets/images/dashboard.svg';
import { nestRoutes } from '../../../routes/routes';
import { ROUTE, USER_DASHBOARD_ROUTE } from '../../../routes';
// import bell from '../../../assets/images/bell.svg';

type PanelTextProps = { text: string };
const PanelText = ({ text }: PanelTextProps) => (
  <Text
    fontWeight={400}
    fontSize="15px"
  >
    {text}
  </Text>
);

type ItemBadgeProps = { nomba: number; disp: string };
/**
 *
 * @param nomba, disp
 * @returns Badge with nomba or not
 */
const ItemBadge = ({ nomba, disp }: ItemBadgeProps) => (
  <Badge
    borderRadius="50%"
    display={disp}
    fontSize="0.4em"
    colorScheme="darken"
  >
    {nomba}
  </Badge>
);

type SidebarItemContentProps = {
  text: string;
  icon: string;
  badgeVisibility: string;
  badgeContent: number;
};
const SidebarItemContent = ({
  text,
  icon,
  badgeContent,
  badgeVisibility,
}: SidebarItemContentProps) => {
  const iconAlt = `${text}_icon`;
  return (
    <HStack
      minWidth="13vw"
      minHeight="45px"
      pl="2rem"
      justifyContent="left"
    >
      <Image
        h="19.87px"
        w="19.87px"
        src={icon}
        alt={iconAlt}
      />
      <Text
        fontWeight={500}
        fontSize="16px"
      >
        {text}
      </Text>
      <ItemBadge
        nomba={badgeContent}
        disp={badgeVisibility}
      />
    </HStack>
  );
};

type SidebarItemProps = {
  to: USER_DASHBOARD_ROUTE | ROUTE;
  name: string;
};

const SideBarItem = ({ to, name }: SidebarItemProps) => {
  // const [active, setActive] = useState(false);
  const [badgeVisibility, setBadgeVisibility] = useState('none');
  const [badgeContent, setBadgeContent] = useState(0);
  const nomba = 0;
  useEffect(() => {
    if (nomba !== 0) {
      setBadgeContent(nomba);
      setBadgeVisibility('block');
    }
  }, []);

  return (
    <Box
      as={RouteLink}
      to={to}
      _hover={{
        cursor: 'pointer',
      }}
      bgGradient="linear(-273.78deg,darken 2.4%, danger 27.63%, primary 102.85%)"
      borderRadius="12.42px"
    >
      <SidebarItemContent
        text={name}
        icon={dashboard}
        badgeContent={badgeContent}
        badgeVisibility={badgeVisibility}
      />
    </Box>
  );
};
const SidebarItems = () => (
  <VStack
    height="100vh"
    gap="2.4rem"
  >
    {nestRoutes.map((item) => (
      <SideBarItem
        to={item.path}
        name={item.name}
      />
    ))}
  </VStack>
);

/**
 *
 * @returns The Dashboard Sidebar
 */
const DashboardSidebar = () => (
  <div className="DashboardSidebar">
    <Box
      w="25vh"
      h="100vh"
      overflow="hidden"
    >
      <VStack gap="3rem">
        <PanelText text="Member CP" />

        <SidebarItems />
      </VStack>
    </Box>
  </div>
);

export default DashboardSidebar;
