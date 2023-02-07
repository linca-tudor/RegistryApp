import {StyleSheet} from 'react-native';
import Colors from '~/helpers/Colors';

const getStyles = () => {
  return StyleSheet.create({
    container: {
      justifyContent: 'flex-start',
      backgroundColor: Colors.white,
      paddingHorizontal: 15,
      paddingTop: 10,
    },
  });
};

export default getStyles;
