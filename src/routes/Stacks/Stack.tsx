import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Screens } from '../../screens';
import { RouteNames, StackParamList } from './StackTypes';

const Stack = createNativeStackNavigator<StackParamList>();

export const StackRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: '#fff',
        },
        headerBackTitleVisible: false,
        headerTintColor: '#000000',
        headerTitleStyle: {
          fontFamily: 'DancingScript_700Bold',
          fontSize: 24,
        },
      }}
    >
      <Stack.Screen name={RouteNames.Home} component={Screens.Home} />
      <Stack.Screen name={RouteNames.Details} component={Screens.Details} />
    </Stack.Navigator>
  );
};
