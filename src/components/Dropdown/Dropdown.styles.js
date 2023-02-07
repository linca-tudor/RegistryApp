import {StyleSheet} from 'react-native';
import Colors from '~/helpers/Colors';

const getStyles = () => {
  return StyleSheet.create({
    button: {
      // flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Colors.lightLavender,
      height: 50,
      zIndex: 1,
      elevation: 1,
    },
    dropdown: {
      position: 'absolute',
      height: 100,
      width: 100,
      backgroundColor: Colors.lavander,
      shadowColor: Colors.black,
      shadowRadius: 4,
      shadowOffset: {height: 4, width: 0},
      shadowOpacity: 0.5,
      elevation: 1,
    },
    overlay: {
      width: '100%',
      height: '100%',
      backgroundColor: 'red',
    },
    item: {
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderBottomWidth: 1,
    },
  });
};

export default getStyles;
