import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import getStyles from './RoundButton.styles';

const Button = ({onPress, icon, containerStyle}) => {
  const styles = getStyles();

  return (
    <View style={[styles.buttonContainer, containerStyle]}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        {icon && <View>{icon}</View>}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
