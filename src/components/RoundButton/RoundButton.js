import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import getStyles from './RoundButton.styles';

const Button = ({onPress, icon}) => {
  const styles = getStyles();

  return (
    <TouchableOpacity style={[styles.button]} onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
};

export default Button;
