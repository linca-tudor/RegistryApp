import {StyleSheet} from 'react-native';
import Colors from '~/helpers/Colors';

const getStyles = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: 75,
      borderRadius: 12.5,
      paddingLeft: 5,
      paddingRight: 5,
      backgroundColor: Colors.white,
    },
    iconContainer: {
      height: '65%',
      width: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderRightColor: Colors.warmGrey,
      borderRightWidth: 2,
    },
    crossIcon: {
      opacity: 0.5,
      alignSelf: 'center',
      marginLeft: 'auto',
    },
    textContainer: {
      maxWidth: '70%',
      height: '100%',
      paddingTop: 12.5,
      marginLeft: 15,
    },
    title: {
      flex: 1,
      fontSize: 13.5,
      color: Colors.warmGrey,
    },
    inputContainer: {
      flex: 3,
      flexDirection: 'row',
      alignItems: 'center',
      overflow: 'hidden',
    },
    input: {
      fontSize: 16.5,
      fontWeight: '400',
    },
  });
};

export default getStyles;
