import {StyleSheet} from 'react-native';
import Colors from '~/helpers/Colors';

const getStyles = () => {
  return StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: Colors.white,
      paddingHorizontal: 15,
    },
  });
};

export default getStyles;
