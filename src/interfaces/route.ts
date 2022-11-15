import { ROUTE, USER_DASHBOARD_ROUTE } from '../routes';

export default interface IRoute {
  path: ROUTE | USER_DASHBOARD_ROUTE;
  name: string;
  exact: boolean;
  element: any;
  props?: any;
  selected: boolean,
  icon?: any;
}
