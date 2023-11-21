import { IHome } from '../mocks';
import { StackRoutes } from './Stacks/Stack';

export const Routes = {
  StackRoutes,
};

export enum RouteNames {
  Home = 'Home',
  Details = 'Details',
}

export type StackParamList = {
  Home: undefined;
  Details: {
    item: IHome;
  };
};
