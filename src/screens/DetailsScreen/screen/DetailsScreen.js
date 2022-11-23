import React from 'react';
import {View, Text, Linking} from 'react-native';
import Button from '~/components/Button';
import Avatar from '~/components/Avatar';
import ListItem from '~/components/ListItem';
import getStyles from './DetailsScreen.styles';
import getGlobalStyles from '~/helpers/GlobalStyles';
import Colors from '~/helpers/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DetailsScreen = ({profile, onButtonPress, isFirstTabActive}) => {
  const styles = getStyles();
  const globalStyles = getGlobalStyles();

  // console.log('In DetailsScreen profile is: ', JSON.stringify(profile, 0, 2));

  return (
    <View style={[globalStyles.flex, styles.container]}>
      <Avatar avatar={profile.avatar} size={200} />
      <View style={styles.avatarTextContainer}>
        <Text style={styles.name}>
          {profile.first_name} {profile.last_name}
        </Text>
        <Text style={styles.jobTitle}>{profile.job}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Button
          leftButtonTitle="Details"
          rightButtonTitle="Contact"
          onLeftButtonPress={() => onButtonPress(true)}
          onRightButtonPress={() => onButtonPress(false)}
        />
        {isFirstTabActive && (
          <View style={styles.infoContainer}>
            <View style={styles.infoTextContainer}>
              <ListItem
                icon={
                  <AntDesign name="user" size={25} color={Colors.lavander} />
                }
                text={`${profile.age} years old`}
              />
              <ListItem
                icon={
                  <AntDesign name="staro" size={25} color={Colors.lavander} />
                }
                text={`${profile.gender}`}
              />
              <ListItem
                icon={
                  <Foundation name="quote" size={25} color={Colors.lavander} />
                }
                text={`${profile.quote}`}
              />
            </View>
          </View>
        )}

        {!isFirstTabActive && (
          <View style={styles.infoContainer}>
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
                  Linking.openURL(`mailto:${profile.email}`);
                }}
                text={profile.email}
              />
              <ListItem
                icon={
                  <SimpleLineIcons
                    name="call-out"
                    size={24}
                    color={Colors.lavander}
                  />
                }
                text={profile.phone_number}
              />
              <ListItem
                icon={
                  <MaterialCommunityIcons
                    name="map-marker-radius-outline"
                    size={25}
                    color={Colors.lavander}
                  />
                }
                text={profile.address}
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default DetailsScreen;
