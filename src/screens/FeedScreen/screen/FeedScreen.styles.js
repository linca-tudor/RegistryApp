import {StyleSheet} from 'react-native';
import Colors from '~/helpers/Colors';

const getStyles = () => {
  return StyleSheet.create({
    container: {
      backgroundColor: Colors.white,
    },
    footerContainer: {
      height: 60,
      marginBottom: 35,
      alignItems: 'center',
      justifyContent: 'center',
    },
    footerText: {
      color: Colors.warmGrey,
    },
  });
};

export default getStyles;
