import { Route, Routes } from 'react-router-dom';
import {
  Button,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import Box from '../../common/Box';

import { ToggleMenu } from './ToggleMenu';
import { WalletBalance } from './WalletBalance';
import { inDashboardRoutes } from '../../../routes/routes';
import { RightSide } from '../../../pages/Userdashboard/RightSide';

function Dashboard() {
  return (
    <VStack w="764px" ml="14rem" justifyContent="center">
      <Box
        pt="5rem"
        pl="6rem"
        position="fixed"
        zIndex={2}
        top={0}
        h="30vh"
        pb=".5rem"
      >
        <HStack
          alignItems="center"
          justifyContent="center"
          w="100vw"
          padding="2rem"
        >
          <WalletBalance />
          <ToggleMenu />
        </HStack>
      </Box>
      <Flex pt="16rem" pl="5rem" justify="start" alignItems="flex-start">
        <Routes>
          {inDashboardRoutes.map((routes) => (
            <Route
              key={routes.path}
              path={routes.path}
              element={<routes.element />}
            />
          ))}
        </Routes>
        {RightSide()}
      </Flex>
    </VStack>
  );
}

export default Dashboard;
