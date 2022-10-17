import {StyleSheet} from 'react-native';
import Colors from '~/helpers/Colors';

const getRandomColor = alpha => {
  console.log(toString(1));
  return (
    'rgba(' +
    Math.floor(Math.random() * 256) +
    ',' +
    Math.floor(Math.random() * 256) +
    ',' +
    Math.floor(Math.random() * 256) +
    ',' +
    alpha.toString() +
    ')'
  );
};

const getStyles = () => {
  return StyleSheet.create({
    itemContainer: {
      flexDirection: 'row',
      paddingHorizontal: 20,
      height: 150,
      alignItems: 'center',
      justifyContent: 'center',
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
    avatarInitialsContainer: {
      width: 125,
      height: 125,
      borderRadius: 35,
      backgroundColor: getRandomColor(0.2),
      justifyContent: 'center',
      alignItems: 'center',
    },
    avatarInitials: {
      fontSize: 40,
      fontWeight: '1000',
      color: getRandomColor(1),
    },
  });
};

export default getStyles;
