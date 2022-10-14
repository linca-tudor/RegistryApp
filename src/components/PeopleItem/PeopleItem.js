import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import getGlobalStyles from '~/helpers/GlobalStyles';
import Image from '../Image';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import getStyles from './PeopleItem.styles';

const PeopleItem = ({isIcon, avatar, firstName, lastName, quote, address}) => {
  const styles = getStyles();
  const globalStyles = getGlobalStyles();

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
      {!isIcon && <Image source={avatar} size={125} borderRadius={30} />}
      {isIcon && (
        <View style={styles.iconContainer}>
          <SimpleLineIcons name="user" size={125} color="black" />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default PeopleItem;
