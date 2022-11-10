import IRoute from '../interfaces/route';
import Userdashboard from '../pages/Userdashboard/Userdashboard.page';
import Login from '../pages/auth/Login.page';
import SignUp from '../pages/auth/Signup.page';
import Landing from '../pages/Landing.page';
import { ROUTE, USER_DASHBOARD_ROUTE } from '.';
import Deposit from '../components/UserDashboard/Deposit/Deposit.component';
import ECommerce from '../components/UserDashboard/ECommerce/ECommerce.component';
import EWallet from '../components/UserDashboard/EWallet/EWallet.component';
import Genealogy from '../components/UserDashboard/Genealogy/Genealogy.component';
import Support from '../components/UserDashboard/Support/Support.component';
import Payout from '../components/UserDashboard/Payout/Payout.component';
import Dashboard from '../components/UserDashboard/Dashboard/Dashboard.component';

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

export const nestRoutes: IRoute[] = [
  {
    path: USER_DASHBOARD_ROUTE.DEFAULT,
    name: 'Dashboard',
    element: Dashboard,
    exact: true,
  },
  {
    path: USER_DASHBOARD_ROUTE.USER_DEPOSIT,
    name: 'Deposit',
    element: Deposit,
    exact: true,
  },
  {
    path: USER_DASHBOARD_ROUTE.USER_ECOMMERCE,
    name: 'ECommerce',
    element: ECommerce,
    exact: true,
  },
  {
    path: USER_DASHBOARD_ROUTE.USER_EWALLET,
    name: 'EWallet',
    element: EWallet,
    exact: true,
  },
  {
    path: USER_DASHBOARD_ROUTE.USER_GENEALOGY,
    name: 'Genealogy',
    element: Genealogy,
    exact: true,
  },
  {
    path: USER_DASHBOARD_ROUTE.USER_PAYOUT,
    name: 'Payout',
    element: Payout,
    exact: true,
  },
  {
    path: USER_DASHBOARD_ROUTE.USER_SUPPORT,
    name: 'Support',
    element: Support,
    exact: true,
  },
];

export default routes;
