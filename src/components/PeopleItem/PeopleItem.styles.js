import {StyleSheet} from 'react-native';
import Colors from '~/helpers/Colors';

const getStyles = () => {
  return StyleSheet.create({
    itemContainer: {
      flexDirection: 'row',
      paddingHorizontal: 20,
      height: 150,
      alignItems: 'center',
    },
    textContainer: {
      height: '100%',
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginRight: 15,
      borderBottomWidth: 1,
      borderBottomColor: Colors.warmGrey,
      borderStyle: 'dashed',
    },
    iconContainer: {
      width: 125,
      height: 125,
      borderRadius: 30,
      overflow: 'hidden',
    },
    primaryText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: Colors.black,
      marginBottom: 7.5,
    },
    secondaryText: {
      fontSize: 16,
      color: Colors.warmGrey,
      marginTop: 2.5,
    },
  });
};

export default getStyles;
