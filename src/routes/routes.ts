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

// Icons import
import dashboardIcon from '../assets/images/dashboard.svg';
import payoutIcon from '../assets/images/payout.svg';
import genealogyIcon from '../assets/images/genealogy.svg';

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
		icon: dashboardIcon,
	},
	{
		path: USER_DASHBOARD_ROUTE.USER_DEPOSIT,
		name: 'Deposit',
		element: Deposit,
		selected: false,
		exact: true,
		icon: payoutIcon,
	},
	{
		path: USER_DASHBOARD_ROUTE.USER_ECOMMERCE,
		name: 'ECommerce',
		element: ECommerce,
		selected: false,
		exact: true,
		icon: payoutIcon,
	},
	{
		path: USER_DASHBOARD_ROUTE.USER_EWALLET,
		name: 'EWallet',
		element: EWallet,
		selected: false,
		exact: true,
		icon: payoutIcon,
	},
	{
		path: USER_DASHBOARD_ROUTE.USER_GENEALOGY,
		name: 'Genealogy',
		element: Genealogy,
		selected: false,
		exact: true,
		icon: genealogyIcon,
	},
	{
		path: USER_DASHBOARD_ROUTE.USER_PAYOUT,
		name: 'Payout',
		element: Payout,
		selected: false,
		exact: true,
		icon: payoutIcon,
	},
	{
		path: USER_DASHBOARD_ROUTE.USER_SUPPORT,
		name: 'Support',
		element: Support,
		selected: false,
		exact: true,
		icon: payoutIcon,
	},
];

export default routes;
