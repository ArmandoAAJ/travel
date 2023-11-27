import { IHome } from '../../mocks';

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
