import {StyleSheet} from 'react-native';
import Colors from '~/helpers/Colors';

const getStyles = () => {
  return StyleSheet.create({
    container: {
      height: 42.5,
      flex: 1,
      backgroundColor: Colors.magnolia,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    textContainer: {
      flex: 1,
      backgroundColor: Colors.magnolia,
    },
    textInput: {
      fontWeight: '400',
      fontSize: 16.5,
    },
    countryPickerButton: {
      width: 50,
      height: 38,
      marginTop: 4.5,
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 6.5,
      borderBottomLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    flagButton: {
      backgroundColor: Colors.lavanderLight,
    },
  });
};

export default getStyles;
