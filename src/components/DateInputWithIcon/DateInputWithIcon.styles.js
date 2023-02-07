import {StyleSheet} from 'react-native';
import Colors from '~/helpers/Colors';

const getStyles = () => {
  return StyleSheet.create({
    placeholder: {
      flex: 1,
      fontSize: 16.5,
      color: Colors.starDust,
    },
    date: {
      marginLeft: 0,
    },
  });
};

export default getStyles;
