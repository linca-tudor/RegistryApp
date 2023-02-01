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
    dropdownContainer: {
      // position: 'absolute',
      marginTop: -10,
      backgroundColor: Colors.paleLavender,
      width: '100%',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    dropdownTopCover: {
      height: 10,
      width: '100%',
      backgroundColor: Colors.magnolia,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    dropdownContentContainer: {
      width: '100%',
      paddingVertical: 5,
    },
    dropdownItem: {
      height: 31,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    itemText: {
      fontSize: 15,
      color: Colors.blackCow,
      fontWeight: '400',
      marginLeft: 6,
    },
  });
};

export default getStyles;
