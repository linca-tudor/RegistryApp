import {StyleSheet} from 'react-native';
import Colors from '~/helpers/Colors';

const getStyles = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
      justifyContent: 'flex-start',
      backgroundColor: Colors.white,
      paddingHorizontal: 15,
    },
  });
};

export default getStyles;
