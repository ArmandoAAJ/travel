import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Screens } from '../../screens';
import { RouteNames, StackParamList } from '..';

const Stack = createNativeStackNavigator<StackParamList>();

export const StackRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: '#fff',
        },
      }}
    >
      <Stack.Screen name={RouteNames.Home} component={Screens.Home} />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={RouteNames.Details}
        component={Screens.Details}
      />
    </Stack.Navigator>
  );
};
