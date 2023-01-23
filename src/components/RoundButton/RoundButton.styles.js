import {Platform, StyleSheet} from 'react-native';
import Colors from '~/helpers/Colors';

const getStyles = () => {
  return StyleSheet.create({
    button: {
      width: 70,
      height: 70,
      bottom: 10,
      // right: 20,
      // left: 10,
      alignSelf: 'center',
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
