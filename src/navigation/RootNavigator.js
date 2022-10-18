import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Routes from '~/helpers/Routes';
import PeopleListContainer from '~/screens/PeopleList';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '~/helpers/Colors';

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === Routes.list) {
            iconName = focused ? 'ios-list' : 'list-outline';
          } else if (route.name === Routes.search) {
            iconName = focused ? 'ios-search' : 'search-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {height: 55, paddingBottom: 5, position: 'absolute'},
        tabBarActiveTintColor: Colors.lavander,
        tabBarInactiveTintColor: Colors.warmGrey,
      })}>
      <Tab.Screen name={Routes.list} component={PeopleListContainer} />
      <Tab.Screen name={Routes.search} component={PeopleListContainer} />
    </Tab.Navigator>
  );
};

export default RootNavigator;
