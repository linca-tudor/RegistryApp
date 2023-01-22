import {StyleSheet} from 'react-native';
import Colors from '~/helpers/Colors';
import {getRandomColor} from '~/helpers/Functions';

const getStyles = size => {
  return StyleSheet.create({
    avatarContainer: {
      width: size,
      height: size,
      borderRadius: 35,
      backgroundColor: Colors.magnolia,
      justifyContent: 'center',
    },
    avatarInitials: {
      fontSize: 50,
      fontWeight: 'bold',
      textAlign: 'center',
      textAlignVertical: 'center',
      color: Colors.lavander,
    },
    avatarImage: {
      alignSelf: 'center',
    },
  });
};

export default getStyles;
