import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import getStyles from './Button.styles';

const Button = ({onPress, icon, title, containerStyle, textStyle}) => {
  const styles = getStyles();

  return (
    <TouchableOpacity style={[styles.button, containerStyle]} onPress={onPress}>
      {icon && <View>{icon}</View>}
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
