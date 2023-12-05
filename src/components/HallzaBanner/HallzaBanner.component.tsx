import { Link as RouteLink } from 'react-router-dom';
import { Flex, Box, Text } from '@chakra-ui/react';
import {
  ROUTE,
  USER_DASHBOARD_ROUTE,
  IN_DASHBOARD_ROUTE,
} from '../../routes';

const BannerFeatures = [
  {
    path: ROUTE.LOGIN,
    title: 'Solutions',
    subtitle: 'View our Solutions library',
  },
  {
    path: ROUTE.LOGIN,
    title: 'Products',
    subtitle: 'Checkout the products we offer to help your event',
  },
  {
    path: ROUTE.LOGIN,
    title: 'Job Opportunities',
    subtitle: 'Take a look and apply for Hallza gigs',
  },
  {
    path: ROUTE.LOGIN,
    title: 'Customer Innovation',
    subtitle: 'See our customer success stories',
  },
];
interface BannerItemI {
  title: string;
  subtitle: string;
  path: ROUTE | USER_DASHBOARD_ROUTE | IN_DASHBOARD_ROUTE;
}

const BannerItem = ({ title, subtitle, path }: BannerItemI) => (
  <Box fontSize="14px" as={RouteLink} to={path} color="white">
    <Text fontWeight={600}>{title}</Text>
    <Text fontWeight={400}>{subtitle}</Text>
  </Box>
);
const HallzaBanner = () => (
  <Flex
    display={{ base: 'none', md: 'flex' }}
    h="14vh"
    pl="4pc"
    pr="4pc"
    w="100vw"
    bg="primary"
    alignItems="center"
    justifyContent="space-between"
    textAlign="center"
  >
    {
      BannerFeatures.map((feature) => <BannerItem path={feature.path} title={feature.title} subtitle={feature.subtitle} />)
    }
  </Flex>
);

export default HallzaBanner;
