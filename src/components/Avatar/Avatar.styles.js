import {StyleSheet} from 'react-native';
import Colors from '~/helpers/Colors';
import {getRandomColor} from '~/helpers/Functions';

const getStyles = () => {
  return StyleSheet.create({
    avatarContainer: {
      width: 125,
      height: 125,
      borderRadius: 35,
      backgroundColor: getRandomColor(0.2),
      justifyContent: 'center',
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
