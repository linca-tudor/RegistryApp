import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import Colors from '~/helpers/Colors';

const getStyles = () => {
  return StyleSheet.create({
    button: {
      width: '75%',
      height: 65,
      marginTop: 5,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.lavander,
      borderRadius: 10,
    },
    text: {
      textAlign: 'center',
      fontSize: Platform.OS === 'android' ? 16 : 19,
      fontWeight: '600',
      color: Colors.white,
    },
  });
};

export default getStyles;
