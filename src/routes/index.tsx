import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomRoutes from './bottom.routes';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Principal" component={BottomRoutes} />
    </Stack.Navigator>
  );
}
