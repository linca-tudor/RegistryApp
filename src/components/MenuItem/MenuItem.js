import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import getStyles from './MenuItem.styles';

const MenuItem = ({icon, text, onPress}) => {
  const styles = getStyles();
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        {icon}
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default MenuItem;
