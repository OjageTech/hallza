import {
  ROUTE,
  USER_DASHBOARD_ROUTE,
  IN_DASHBOARD_ROUTE,
} from '../routes';

export default interface FooterLinkI {
  name: string;
  path: ROUTE | USER_DASHBOARD_ROUTE | IN_DASHBOARD_ROUTE;
}
