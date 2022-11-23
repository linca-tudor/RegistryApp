import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import getStyles from './Button.styles';
import Colors from '~/helpers/Colors';

const Button = ({
  onLeftButtonPress,
  onRightButtonPress,
  leftButtonTitle,
  rightButtonTitle,
  style,
}) => {
  const styles = getStyles();

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={onLeftButtonPress}
        style={[
          styles.button,
          {marginRight: -25, backgroundColor: Colors.lavander, width: 90},
        ]}>
        <Text style={styles.buttonText}>{leftButtonTitle}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onRightButtonPress}
        style={[
          styles.button,
          {borderLeftWidth: 0, paddingLeft: 25, width: 100},
        ]}>
        <Text style={styles.buttonText}>{rightButtonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
