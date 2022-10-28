import IRoute from '../interfaces/route';
import Userdashboard from '../pages/Userdashboard.page';
import Login from '../pages/auth/Login.page';
import SignUp from '../pages/auth/Signup.page';
import Landing from '../pages/Landing.page';
import { ROUTE } from '.';

const routes: IRoute[] = [
  {
    path: ROUTE.LANDING,
    name: 'Landing',
    element: Landing,
    exact: true,
  },
  {
    path: ROUTE.USER_DASHBOARD,
    name: 'Userdashboard',
    element: Userdashboard,
    exact: true,
  },
  {
    path: ROUTE.LOGIN,
    name: 'Login',
    element: Login,
    exact: true,
  },
  {
    path: ROUTE.SIGNUP,
    name: 'Signup',
    element: SignUp,
    exact: true,
  },
];
export default routes;
