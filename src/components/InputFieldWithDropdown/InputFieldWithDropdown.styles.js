import {StyleSheet} from 'react-native';
import {Platform} from 'react-native';
import Colors from '~/helpers/Colors';

const getStyles = crossIconPosition => {
  let bottom;
  if (crossIconPosition === 'center') {
    bottom = 21.95;
  } else {
    bottom = undefined;
  }
  return StyleSheet.create({
    container: {
      height: 42.5,
      flexDirection: 'column',
      backgroundColor: Colors.magnolia,
      borderRadius: 10,
    },
    crossIcon: {
      position: 'absolute',
      opacity: 0.5,
      paddingRight: 10,
      bottom: bottom,
    },
    inputContainer: {
      height: 42.5,
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
      position: 'absolute',
      marginTop: -10,
      height: 150,
      backgroundColor: Colors.paleLavender,
      width: '100%',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
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
