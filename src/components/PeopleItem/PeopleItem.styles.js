import {Platform, StyleSheet} from 'react-native';
import Colors from '~/helpers/Colors';

const getStyles = () => {
  return StyleSheet.create({
    itemContainer: {
      flexDirection: 'row',
      paddingHorizontal: 20,
      height: 150,
      alignItems: 'center',
    },
    textDividerContainer: {paddingRight: 15, justifyContent: 'center'},
    textContainer: {
      height: 130,
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    iconContainer: {
      width: 125,
      height: 125,
      borderRadius: 30,
      overflow: 'hidden',
    },
    itemDivider: {
      alignSelf: 'flex-end',
      height: 0,
      width: '100%',
      borderBottomWidth: 1,
      borderStyle: Platform.OS === 'android' ? 'dashed' : 'solid',
      borderBottomColor: Colors.warmGrey,
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
