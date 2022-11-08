import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from '~/store/store';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {useFlipper} from '@react-navigation/devtools';
import RootTabNavigator from '~/navigation/Navigators';
import SplashScreen from 'react-native-lottie-splash-screen';
import {StatusBar} from 'react-native';
import Colors from '~/helpers/Colors';

const App = () => {
  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 5_000);
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
        <RootTabNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
