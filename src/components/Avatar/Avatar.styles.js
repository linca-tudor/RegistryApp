import {StyleSheet} from 'react-native';
import Colors from '~/helpers/Colors';
import {getRandomColor} from '~/helpers/Functions';

const getStyles = size => {
  return StyleSheet.create({
    avatarContainer: {
      width: size,
      height: size,
      borderRadius: 35,
      backgroundColor: getRandomColor(0.2),
      justifyContent: 'center',
      shadowColor: Colors.black,
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.4,
      shadowRadius: 5,
    },
    avatarInitials: {
      fontSize: 50,
      fontWeight: 'bold',
      textAlign: 'center',
      textAlignVertical: 'center',
      color: getRandomColor(1),
    },
    avatarImage: {
      alignSelf: 'center',
    },
  });
};

export default getStyles;
