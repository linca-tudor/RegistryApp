import React from 'react';
import {View, Text} from 'react-native';
import getStyles from './FieldErrorMessage.styles';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

const FieldErrorMessage = ({message}) => {
  const styles = getStyles();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(message ? 30 : 0, {
        duration: 300,
      }),
      paddingVertical: withTiming(message ? 5 : 0, {
        duration: 300,
      }),
    };
  });
  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
};

export default FieldErrorMessage;
