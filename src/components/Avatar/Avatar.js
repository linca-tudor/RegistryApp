import React from 'react';
import {Text, View} from 'react-native';
import Strings from '~/helpers/Strings';
import Image from '~/components/Image';
import Icon from 'react-native-vector-icons/AntDesign';
import getStyles from './Avatar.styles';
import {getRandomColor} from '~/helpers/Functions';

const Avatar = ({avatar, initials}) => {
  const styles = getStyles();
  if (!avatar && initials) {
    return (
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarInitials}>{initials}</Text>
      </View>
    );
  }
  return (
    <View style={styles.avatarContainer}>
      <Image
        source={
          avatar
            ? {uri: avatar}
            : Icon.getImageSourceSync(
                Strings.iconNames.unknownAvatar,
                125,
                getRandomColor(1),
              )
        }
        size={avatar ? 125 : 100}
        borderRadius={30}
        style={styles.avatarImage}
      />
    </View>
  );
};

export default Avatar;
