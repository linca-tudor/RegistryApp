import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import getGlobalStyles from '~/helpers/GlobalStyles';
import Image from '../Image';
import getStyles from './PeopleItem.styles';

const PeopleItem = ({title, subtitle, description, image}) => {
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
          {title}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode={'tail'}
          style={styles.secondaryText}>
          {subtitle}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode={'tail'}
          style={styles.secondaryText}>
          {description}
        </Text>
      </View>
      <Image source={image} size={125} borderRadius={30} />
    </TouchableOpacity>
  );
};

export default PeopleItem;
