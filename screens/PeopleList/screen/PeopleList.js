import React from 'react';
import {View, Text} from 'react-native';
import getGlobalStyles from '../../../assets/GlobalStyles';
import Image from '../../../components/Image';
import getStyles from './PeopleList.styles';

const PeopleList = () => {
  const styles = getStyles();
  const generalStyles = getGlobalStyles();
  return (
    <View style={[generalStyles.flex, {backgroundColor: 'grey'}]}>
      <Text>PeopleList</Text>
    </View>
  );
};

export default PeopleList;
