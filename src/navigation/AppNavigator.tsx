import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../views/HomeScreen';
import {BeerDetails} from '../views/BeerDetails/BeerDetails';
import {RootStackParamList} from '../@types/RootStackParamList';

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BeerList"
        component={HomeScreen}
        options={{title: `Beer's List`}}
      />
      <Stack.Screen name="BeerDetails" component={BeerDetails} />
    </Stack.Navigator>
  );
};
