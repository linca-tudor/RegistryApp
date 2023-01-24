import {StyleSheet} from 'react-native';
import {Platform} from 'react-native';
import Colors from '~/helpers/Colors';

const getStyles = () => {
  return StyleSheet.create({
    inputContainer: {
      height: 42.5,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 6,
    },
  });
};

export default getStyles;
