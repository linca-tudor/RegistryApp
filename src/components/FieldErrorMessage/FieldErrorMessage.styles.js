import {StyleSheet} from 'react-native';
import Colors from '~/helpers/Colors';

const getStyles = () => {
  return StyleSheet.create({
    container: {
      zIndex: 1,
      paddingHorizontal: 5,
      justifyContent: 'center',
      backgroundColor: Colors.peachSchnapps,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    text: {color: Colors.sunsetOrange},
  });
};

export default getStyles;
