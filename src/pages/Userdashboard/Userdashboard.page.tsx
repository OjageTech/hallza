import { Route, Routes } from 'react-router-dom';
import { VStack, Flex, Container } from '@chakra-ui/react';
import DashboardHeader from '../../layouts/headers/Userdashboard/Userdashboard.header';
import DashboardSidebar from '../../layouts/sidebars/UserDashboard/UserDashboard.sidebar';
import { nestRoutes } from '../../routes/routes';

const Userdashboard = () => (
  <div className="userDashboard">
    {/*
    -SIDBAR [LEFT - RIGHT]
    -HEADER
    -CONTENT

    */}
    <Flex justify="start" alignItems="flex-start">
      <VStack justify="start" alignItems="flex-start">
        <DashboardHeader />
        <Container ml="40vh">
          <Routes>
            {nestRoutes.map((routes) => (
              <Route
                key={routes.path}
                path={routes.path}
                element={<routes.element />}
              />
            ))}
          </Routes>
        </Container>
      </VStack>
      <DashboardSidebar />
    </Flex>
  </div>
);

export default Userdashboard;
