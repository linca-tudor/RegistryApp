import {StyleSheet} from 'react-native';
import Colors from '~/helpers/Colors';

const getStyles = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginBottom: 20,
    },
    text: {
      color: Colors.black,
      fontSize: 16,
      marginLeft: 7.5,
    },
  });
};

export default getStyles;
