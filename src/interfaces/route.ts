import { ROUTE } from '../routes';

export default interface IRoute {
  path: ROUTE;
  name: string;
  exact: boolean;
  element: any;
  props?: any;
}
