import {StyleSheet} from 'react-native';
import Colors from '~/helpers/Colors';

const getStyles = () => {
  return StyleSheet.create({
    button: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Colors.lightLavender,
      height: 50,
      zIndex: 1,
      elevation: 1,
    },
    buttonText: {
      flex: 1,
      textAlign: 'center',
    },
    icon: {
      marginRight: 10,
    },
    dropdown: {
      position: 'absolute',
      shadowColor: Colors.black,
      shadowRadius: 4,
      shadowOffset: {height: 4, width: 0},
      shadowOpacity: 0.5,
      elevation: 1,
    },
    overlay: {
      width: '100%',
      height: '100%',
    },
    item: {
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderBottomWidth: 1,
    },
  });
};

export default getStyles;
