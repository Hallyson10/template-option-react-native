import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoaderScreen from './loaderScreen';
const StackOnboarding = createNativeStackNavigator();

export default function Routes() {
  return (
    <StackOnboarding.Navigator>
      <StackOnboarding.Screen name={'LoaderScreen'} component={LoaderScreen} />
    </StackOnboarding.Navigator>
  );
}
