import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import getStyles from './RoundButton.styles';

const Button = ({onPress, icon, position}) => {
  const styles = getStyles(position);

  return (
    <TouchableOpacity style={[styles.button]} onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
};

export default Button;
