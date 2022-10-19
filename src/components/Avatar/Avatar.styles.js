import {StyleSheet} from 'react-native';
import {getRandomColor} from '~/helpers/Functions';

const getStyles = () => {
  return StyleSheet.create({
    avatarContainer: {
      width: 125,
      height: 125,
      borderRadius: 35,
      backgroundColor: getRandomColor(0.2),
      justifyContent: 'center',
      alignItems: 'center',
    },
    avatarInitials: {
      fontSize: 40,
      fontWeight: 'bold',
      color: getRandomColor(1),
    },
  });
};

export default getStyles;
