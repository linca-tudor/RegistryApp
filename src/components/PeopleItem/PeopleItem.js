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
      style={[globalStyles.flex, styles.itemContainer]}>
      <View style={globalStyles.flex}>
        <Text>{title}</Text>
        <Text>{subtitle}</Text>
        <Text>{description}</Text>
      </View>
      <Image source={image} size={100} />
    </TouchableOpacity>
  );
};

export default PeopleItem;
