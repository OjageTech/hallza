import { Route, Routes } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';
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
    <DashboardHeader />

    <Flex justify="start" alignItems="flex-start">
      <DashboardSidebar />
      <Routes>
        {nestRoutes.map((routes) => (
          <Route
            key={routes.path}
            path={routes.path}
            element={<routes.element />}
          />
        ))}
      </Routes>
    </Flex>
  </div>
);

export default Userdashboard;
