import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import getGlobalStyles from '~/helpers/GlobalStyles';
import Colors from '../../helpers/Colors';
import {getInitials} from '../../helpers/Functions';
import Image from '../Image';
import Icon from 'react-native-vector-icons/Fontisto';
import getStyles from './PeopleItem.styles';

const PeopleItem = ({avatar, firstName, lastName, gender, quote, address}) => {
  const styles = getStyles();
  const globalStyles = getGlobalStyles();

  const renderAvatar = () => {
    if (avatar) {
      return <Image source={avatar} size={125} borderRadius={30} />;
    } else {
      return (
        <View style={styles.avatarInitialsContainer}>
          <Text style={styles.avatarInitials}>
            {getInitials(firstName + ' ' + lastName)}
          </Text>
        </View>
      );
    }
  };

  return (
    <TouchableOpacity
      onPress={() => {
        console.log('PeopleItem component pressed!');
      }}
      style={[styles.itemContainer]}>
      <View style={[globalStyles.flex, styles.textContainer]}>
        <Text
          numberOfLines={1}
          ellipsizeMode={'tail'}
          style={styles.primaryText}>
          {firstName} {lastName}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode={'tail'}
          style={styles.secondaryText}>
          {quote}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode={'tail'}
          style={styles.secondaryText}>
          {address}
        </Text>
      </View>
      {renderAvatar()}
    </TouchableOpacity>
  );
};

export default PeopleItem;
