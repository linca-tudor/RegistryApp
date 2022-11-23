import {StyleSheet} from 'react-native';
import Colors from '~/helpers/Colors';

const getStyles = () => {
  return StyleSheet.create({
    buttonContainer: {
      flexDirection: 'row',
      borderRadius: 10,
      height: 40,
    },
    button: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1.5,
      borderRadius: 15,
      borderColor: Colors.lavander,
    },
    buttonText: {
      color: Colors.black,
      width: '100%',
      textAlign: 'center',
      textAlignVertical: 'center',
      fontSize: 14,
      fontWeight: 'bold',
    },
  });
};

export default getStyles;
