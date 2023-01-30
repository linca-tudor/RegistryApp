import {StyleSheet} from 'react-native';
import {Platform} from 'react-native';
import Colors from '~/helpers/Colors';

const getStyles = () => {
  return StyleSheet.create({
    container: {
      height: 43.9,
      flexDirection: 'column',
      // marginLeft: 15,
      backgroundColor: Colors.magnolia,
      borderRadius: 10,
    },
    crossIcon: {
      position: 'absolute',
      opacity: 0.5,
      paddingRight: 10,
    },
    inputContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingHorizontal: 6,
    },
    input: {
      flex: 1,
      fontSize: 16.5,
      fontWeight: '400',
      color: Colors.black,
      marginLeft: Platform.OS === 'android' ? -3.5 : 0,
      marginRight: 35,
    },
    dropdown: {
      elevation: 1,
      position: 'absolute',
      marginTop: -10,
      height: 150,
      backgroundColor: Colors.paleLavender,
      width: '100%',
      shadowColor: Colors.black,
      shadowRadius: 4,
      shadowOffset: {height: 4, width: 1},
      shadowOpacity: 0.2,
    },
    dropdownItem: {
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    itemText: {
      fontSize: 14,
      color: Colors.black,
      marginTop: 7.5,
      marginLeft: 6,
    },
  });
};

export default getStyles;
