import React from 'react';
import {View, Text} from 'react-native';
import getStyles from './FieldErrorMessage.styles';

const FieldErrorMessage = ({message}) => {
  const styles = getStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

export default FieldErrorMessage;
