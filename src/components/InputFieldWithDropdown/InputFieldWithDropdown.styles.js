import {StyleSheet} from 'react-native';
import {Platform} from 'react-native';
import Colors from '~/helpers/Colors';

const getStyles = () => {
  return StyleSheet.create({
    crossIcon: {
      position: 'absolute',
      opacity: 0.5,
      paddingRight: 10,
    },
    textContainer: {
      zIndex: 100,
      flexDirection: 'column',
      marginLeft: 15,
      backgroundColor: Colors.magnolia,
      borderRadius: 10,
    },
    inputContainer: {
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingHorizontal: 6,
    },
    input: {
      fontSize: 16.5,
      fontWeight: '400',
      color: Colors.black,
      marginLeft: Platform.OS === 'android' ? -3.5 : 0,
      marginRight: 35,
    },
    dropdown: {
      position: 'absolute',
      height: 100,
      backgroundColor: Colors.lavander,
      elevation: 5,
      width: '100%',
      shadowColor: Colors.black,
      shadowRadius: 4,
      shadowOffset: {height: 4, width: 0},
      shadowOpacity: 0.5,
    },
  });
};

export default getStyles;
