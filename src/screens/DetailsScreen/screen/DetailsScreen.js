import React, {useState} from 'react';
import {View, Text, Linking} from 'react-native';
import Lottie from 'lottie-react-native';
import Avatar from '~/components/Avatar';
import ListItem from '~/components/ListItem';
import getStyles from './DetailsScreen.styles';
import getGlobalStyles from '~/helpers/GlobalStyles';
import Colors from '~/helpers/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

const DetailsScreen = ({
  address,
  age,
  avatar,
  email,
  firstName,
  gender,
  job,
  lastName,
  phoneNumber,
  quote,
  isLoading,
}) => {
  const styles = getStyles();
  const globalStyles = getGlobalStyles();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Details'},
    {key: 'second', title: 'Contact'},
  ]);

  const FirstTab = () => (
    <View style={styles.infoTextContainer}>
      <ListItem
        icon={<AntDesign name="user" size={25} color={Colors.lavander} />}
        text={`${age} years old`}
      />
      <ListItem
        icon={<AntDesign name="staro" size={25} color={Colors.lavander} />}
        text={`${gender}`}
      />
      <ListItem
        icon={<Foundation name="quote" size={25} color={Colors.lavander} />}
        text={`${quote}`}
      />
    </View>
  );
  const SecondTab = () => (
    <View style={styles.infoTextContainer}>
      <ListItem
        icon={
          <MaterialCommunityIcons
            name="email-send-outline"
            size={25}
            color={Colors.lavander}
          />
        }
        onPress={() => {
          Linking.openURL(`mailto:${email}`);
        }}
        text={email}
      />
      <ListItem
        icon={
          <SimpleLineIcons name="call-out" size={24} color={Colors.lavander} />
        }
        text={phoneNumber}
      />
      <ListItem
        icon={
          <MaterialCommunityIcons
            name="map-marker-radius-outline"
            size={25}
            color={Colors.lavander}
          />
        }
        text={address}
      />
    </View>
  );

  const renderTabBar = props => (
    <TabBar
      {...props}
      style={styles.tabBar}
      indicatorStyle={styles.tabBarIndicator}
      inactiveColor={Colors.black}
      activeColor={Colors.lavander}
      labelStyle={styles.tabBarLabel}
    />
  );

  const renderScene = SceneMap({
    first: FirstTab,
    second: SecondTab,
  });

  return (
    <>
      <Animated.View
        style={[
          useAnimatedStyle(() => {
            return {
              opacity: withTiming(isLoading ? 1 : 0, {
                duration: 250,
              }),
            };
          }),
          styles.loadingAnimation,
        ]}>
        <Lottie
          source={require('~/assets/images/ProfileSearchAnimation.json')}
          style={{
            width: 150,
          }}
          autoPlay
          loop
        />
      </Animated.View>
      <Animated.View
        style={[
          globalStyles.flex,
          styles.container,
          useAnimatedStyle(() => {
            return {
              opacity: withTiming(isLoading ? 0 : 1, {
                duration: 250,
              }),
            };
          }),
        ]}>
        <Avatar avatar={avatar} size={200} />
        <View style={styles.avatarTextContainer}>
          <Text style={styles.name}>
            {firstName} {lastName}
          </Text>
          <Text style={styles.jobTitle}>{job}</Text>
        </View>
        <View style={styles.infoContainer}>
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
          />
        </View>
      </Animated.View>
    </>
  );
};

export default DetailsScreen;
