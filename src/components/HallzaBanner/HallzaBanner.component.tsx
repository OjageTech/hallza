import { Link as RouteLink } from 'react-router-dom';
import { Flex, Box, Text } from '@chakra-ui/react';
import {
  ROUTE,
  USER_DASHBOARD_ROUTE,
  IN_DASHBOARD_ROUTE,
} from '../../routes';

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
    <BannerItem
      path={ROUTE.LOGIN}
      title="Solutions"
      subtitle="View our Hallza Solutions Library"
    />
    <BannerItem
      path={ROUTE.LOGIN}
      title="Products"
      subtitle="View our Hallza Solutions Library"
    />
    <BannerItem
      path={ROUTE.LOGIN}
      title="Solutions"
      subtitle="View our Hallza Solutions Library"
    />
    <BannerItem
      path={ROUTE.LOGIN}
      title="Customer Innovation"
      subtitle="See our Customer success stories"
    />
  </Flex>
);

export default HallzaBanner;
