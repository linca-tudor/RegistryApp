import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import getStyles from './Button.styles';

const Button = ({onPress, icon, title, style, textStyle}) => {
  const styles = getStyles();

  return (
    <TouchableOpacity style={[style, styles.button]} onPress={onPress}>
      {icon && <View>{icon}</View>}
      <Text style={[textStyle, styles.text]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
