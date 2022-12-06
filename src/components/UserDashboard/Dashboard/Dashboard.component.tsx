import { Route, Routes } from 'react-router-dom';

import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';

import { ToggleMenu } from './ToggleMenu';
import { WalletBalance } from './WalletBalance';
import { inDashboardRoutes } from '../../../routes/routes';
import { RightSide } from '../../../pages/Userdashboard/RightSide';

function Dashboard() {
  return (
    <VStack
      marginTop="4.2rem"
      marginLeft="14rem"
      w="764px"
      justifyContent="center"
    >
      {/* 1 */}
      <HStack
        bg="rgb(18,18,18)"
        position="fixed"
        zIndex={3}
        pt="6rem"
        top={20}
        pb=".5rem"
        alignItems="center"
        justifyContent="center"
        w="55%"
        padding="2rem"
        h="20vh"
      >
        <WalletBalance />
        <ToggleMenu />
      </HStack>
      <Flex pt="13rem" justify="start" alignItems="flex-start">
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
