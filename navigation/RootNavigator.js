import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Strings from '../assets/Strings';
import PeopleListContainer from '../screens/PeopleList/';

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={Strings.UI.firstPageTitle}
        component={PeopleListContainer}
      />
      <Tab.Screen
        name={Strings.UI.secondPageTitle}
        component={PeopleListContainer}
      />
    </Tab.Navigator>
  );
};

export default RootNavigator;
