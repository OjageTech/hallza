/* eslint-disable no-shadow */

export enum ROUTE {
  LANDING = '/',
  BOOKING_SYSTEM = '/secure-book/:id/info',
  PRICING = '/pricing/',
  CONTACT = '/contact/',
  LOGIN = '/login',
  SIGNUP = '/signup',
  VENUE_AUTH = '/venue-auth',
  USER_DASHBOARD = '/userDashboard/*',
  SEARCH = '/search/:preferredLocation/:dateRange',
  BROWSEBYTYPE = '/browse/:type/',
  FIND = '/find',
  VENUE_DETAILS = '/venue-details/:id',
}

export enum USER_PROFILE_ROUTE {
  USER_ACTIVITY = 'activities/:activityId/',
  CONTACT = '/contact/',
}

/**
 * All the Routes inside dashboard
 */
export enum USER_DASHBOARD_ROUTE {
  USER_DEPOSIT = '*/deposit',
  USER_ECOMMERCE = '*/ecommerce',
  USER_Withdraw = '*/Withdraw',
  USER_GENEALOGY = '*/genealogy',
  USER_REFERRAL = '*/referral',
  USER_SUPPORT = '*/support',
  USER_PAYOUT = '*/payout',
  DEFAULT = '*',
}

/**
 * All the Routes inside dashboard IN DASHBOARD
 */
export enum IN_DASHBOARD_ROUTE {
  USER_ACTIVITY = '*/activity',
  USER_EXTERNAL = '*/external',
  USER_NEWS = '*/news',
  DEFAULT = '*',
}
type TArgs =
  | { path: ROUTE.LANDING }
  | { path: ROUTE.BOOKING_SYSTEM }
  | { path: ROUTE.LOGIN }
  | { path: ROUTE.SIGNUP }
  | { path: ROUTE.VENUE_AUTH }
  | { path: ROUTE.PRICING; params: { userId: string } }
  | {
      path: ROUTE.CONTACT;
      params: { userId: string; activityId: string };
    }
  | {
      path: USER_PROFILE_ROUTE.CONTACT;
      params: { activityId: string };
    }
  | {
    path: ROUTE.SEARCH;
    params: { preferredLocation: string, dateRange: Date };
  }
  | {
    path: ROUTE.BROWSEBYTYPE;
    params: { type: string };
  }
  | {
    path: ROUTE.VENUE_DETAILS;
    params: { id: string };
  };

type TArgsWithParams = Extract<TArgs, { path: any; params: any }>;

export function createPath(args: TArgs) {
  // Save some CPU power for routes without params
  const events = { params: false };
  const key = 'params';
  if (args.hasOwnProperty.call(events, key)) return args.path;

  // Create a path by replacing params in the route definition
  return Object.entries((args as TArgsWithParams).params).reduce(
    (previousValue: string, [param, value]) => previousValue.replace(`:${param}`, `${value}`),
    args.path,
  );
}
