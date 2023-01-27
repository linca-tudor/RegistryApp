import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from '~/helpers/Routes';
import FeedScreen from '~/screens/FeedScreen';
import ProfileScreen from '~/screens/PofileScreen';
import AddProfileScreen from '~/screens/AddProfileScreen';
import EditProfileScreen from '~/screens/EditProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '~/helpers/Colors';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ListStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.list}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.list} component={FeedScreen} />
      <Stack.Screen
        name={Routes.details}
        component={ProfileScreen}
        id={({params}) => params.id}
      />
      <Stack.Screen name={Routes.newProfile} component={AddProfileScreen} />
      <Stack.Screen name={Routes.editProfile} component={EditProfileScreen} />
    </Stack.Navigator>
  );
};

const SearchScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{width: 100, color: 'black'}}>Search Screen</Text>
    </View>
  );
};

const RootTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === Routes.listNavigator) {
            iconName = focused ? 'ios-list' : 'list-outline';
          } else if (route.name === Routes.search) {
            iconName = focused ? 'ios-search' : 'search-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          height: 55,
          paddingBottom: 5,
          // position: 'absolute',
        },
        tabBarLabelStyle: {
          width: 50,
        },
        tabBarActiveTintColor: Colors.lavander,
        tabBarInactiveTintColor: Colors.warmGrey,
      })}>
      <Tab.Screen name={Routes.listNavigator} component={ListStackNavigator} />
      <Tab.Screen name={Routes.search} component={SearchScreen} />
    </Tab.Navigator>
  );
};

export default RootTabNavigator;
