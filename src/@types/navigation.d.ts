import { StackParamList } from '../routes/Stacks/StackTypes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}
