import {Platform, StyleSheet} from 'react-native';
import Colors from '~/helpers/Colors';

const getStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    bubbleContainer: {
      backgroundColor: Colors.lavander,
      margin: 2,
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 10,
      padding: 5,
    },
    crossIcon: {
      opacity: 0.5,
    },
    textContainer: {
      marginRight: 2.5,
    },
    text: {
      flex: 1,
      fontSize: 14,
      color: Colors.black,
    },
  });
};

export default getStyles;
