
// Icons import
import { MdPayments, MdDashboard, MdSupportAgent } from 'react-icons/md';
import { RiLuggageDepositFill } from 'react-icons/ri';
import { SiMarketo } from 'react-icons/si';
import { TiFlowChildren } from 'react-icons/ti';
import { FaHandHoldingUsd } from 'react-icons/fa';

import IRoute from '../interfaces/route';
import Userdashboard from '../pages/Userdashboard/Userdashboard.page';
import Login from '../pages/auth/Login.page';
import SignUp from '../pages/auth/Signup.page';
import Landing from '../pages/Landing.page';
import { ROUTE, USER_DASHBOARD_ROUTE, IN_DASHBOARD_ROUTE } from '.';
// COMPONENTS FOR THE NESTROUTES
import Deposit from '../components/UserDashboard/Deposit/Deposit.component';
import ECommerce from '../components/UserDashboard/ECommerce/ECommerce.component';
import Withdraw from '../components/UserDashboard/Withdraw/Withdraw.component';
import Genealogy from '../components/UserDashboard/Genealogy/Genealogy.component';
import Support from '../components/UserDashboard/Support/Support.component';
import Payout from '../components/UserDashboard/Payout/Payout.component';
import Dashboard from '../components/UserDashboard/Dashboard/Dashboard.component';
// COMPONENTS FOR THE IN_DASHBOARD_ROUTES
import Portfolio from '../components/UserDashboard/Dashboard/Portfolio/Portfolio.component';
import External from '../components/UserDashboard/Dashboard/External/External.component';
import Activity from '../components/UserDashboard/Dashboard/Activity/Activity.component';
import News from '../components/UserDashboard/Dashboard/News/News.component';



const routes: IRoute[] = [
  {
    path: ROUTE.LANDING,
    name: 'Landing',
    element: Landing,
    exact: true,
    selected: true,
  },
  {
    path: ROUTE.USER_DASHBOARD,
    name: 'Userdashboard',
    element: Userdashboard,
    exact: true,
    selected: false,
  },
  {
    path: ROUTE.LOGIN,
    name: 'Login',
    element: Login,
    exact: true,
    selected: false,
  },
  {
    path: ROUTE.SIGNUP,
    name: 'Signup',
    element: SignUp,
    exact: true,
    selected: false,
  },
];

export const nestRoutes: IRoute[] = [
  {
    path: USER_DASHBOARD_ROUTE.DEFAULT,
    name: 'Dashboard',
    element: Dashboard,
    selected: true,
    exact: true,
    icon: MdDashboard,
  },
  {
    path: USER_DASHBOARD_ROUTE.USER_DEPOSIT,
    name: 'Deposit',
    element: Deposit,
    selected: false,
    exact: true,
    icon: RiLuggageDepositFill,
  },
  {
    path: USER_DASHBOARD_ROUTE.USER_ECOMMERCE,
    name: 'ECommerce',
    element: ECommerce,
    selected: false,
    exact: true,
    icon: SiMarketo,
  },
  {
    path: USER_DASHBOARD_ROUTE.USER_Withdraw,
    name: 'Withdraw',
    element: Withdraw,
    selected: false,
    exact: true,
    icon: FaHandHoldingUsd,
  },
  {
    path: USER_DASHBOARD_ROUTE.USER_GENEALOGY,
    name: 'Genealogy',
    element: Genealogy,
    selected: false,
    exact: true,
    icon: TiFlowChildren,
  },
  {
    path: USER_DASHBOARD_ROUTE.USER_PAYOUT,
    name: 'Payout',
    element: Payout,
    selected: false,
    exact: true,
    icon: MdPayments,
  },
  {
    path: USER_DASHBOARD_ROUTE.USER_SUPPORT,
    name: 'Support',
    element: Support,
    selected: false,
    exact: true,
    icon: MdSupportAgent,
  },
];

export const inDashboardRoutes: IRoute[] = [
  {
    path: IN_DASHBOARD_ROUTE.DEFAULT,
    name: 'Portfolio',
    element: Portfolio,
    exact: true,
    selected: true,
  },
  {
    path: IN_DASHBOARD_ROUTE.USER_ACTIVITY,
    name: 'Activity',
    element: Activity,
    exact: true,
    selected: false,
  },
  {
    path: IN_DASHBOARD_ROUTE.USER_EXTERNAL,
    name: 'External',
    exact: true,
    element: External,
    selected: false,
  },
  {
    path: IN_DASHBOARD_ROUTE.USER_NEWS,
    name: 'News',
    exact: true,
    element: News,
    selected: false,
  },
];
export default routes;
