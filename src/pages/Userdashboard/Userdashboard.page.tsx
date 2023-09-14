import { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { VStack, Flex, Container } from '@chakra-ui/react';
import DashboardHeader from '../../layouts/headers/Userdashboard/Userdashboard.header';
import DashboardSidebar from '../../layouts/sidebars/UserDashboard/UserDashboard.sidebar';
import { nestRoutes } from '../../routes/routes';
import authService from '../../services/auth.service';
import { IUser, user } from '../../interfaces/user';

const Userdashboard = () => {
  const [redirect, setRedirect] = useState<string | null>(null);
  const [userReady, setUserReady] = useState<boolean>(false);
  const currentUser: user = authService.getCurrentUser();
  // const [currentUser, setCurrentUser] = useState<user>();

  useEffect(() => {
    // setCurrentUser(authService.getCurrentUser());
    if (!currentUser) {
      setRedirect('/');
    }
    setUserReady(true);
  }, []);

  if (redirect) {
    return <Navigate to={redirect} />;
  }
  return (
    <div className="userDashboard">
      {/*
    -SIDBAR [LEFT - RIGHT]
    -HEADER
    -CONTENT

    */}
      {userReady && (
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
      )}
    </div>
  );
};
export default Userdashboard;
