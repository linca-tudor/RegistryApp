import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootTabNavigator from '~/navigation/Navigators';
import SplashScreen from 'react-native-lottie-splash-screen';
import {StatusBar} from 'react-native';
import Colors from '~/helpers/Colors';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 5_000);
  }, []);
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
      <RootTabNavigator />
    </NavigationContainer>
  );
};

export default App;
