import {Platform, StyleSheet} from 'react-native';
import Colors from '~/helpers/Colors';

const getStyles = position => {
  var alignment = {};

  switch (position) {
    case 'left':
      alignment = {
        alignSelf: 'flex-start',
        left: 20,
      };
      break;
    case 'right':
      alignment = {
        alignSelf: 'flex-end',
        right: 20,
      };
      break;

    default:
      alignment = {
        alignSelf: 'center',
      };
      break;
  }
  return StyleSheet.create({
    button: {
      width: 70,
      height: 70,
      bottom: 20,
      ...alignment,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.lavander,
      borderRadius: 35,
      position: 'absolute',
      elevation: 5,
      shadowOffset: {
        height: 1,
        width: 1,
      },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      shadowColor: Colors.black,
    },
  });
};

export default getStyles;
