import {StyleSheet} from 'react-native';
import Colors from '~/helpers/Colors';

const getStyles = () => {
  return StyleSheet.create({
    container: {
      paddingTop: 100,
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingHorizontal: 40,
      backgroundColor: Colors.white,
    },
    avatarTextContainer: {
      marginTop: 22.5,
      justifyContent: 'center',
      marginBottom: 20,
    },
    name: {
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      color: Colors.black,
    },
    jobTitle: {
      textAlign: 'center',
      fontSize: 16,
      fontStyle: 'italic',
      color: Colors.warmGrey,
    },
    infoContainer: {
      marginVertical: 10,
      width: '100%',
    },
    infoTextContainer: {
      marginTop: 15,
    },
    infoText: {
      fontSize: 16,
    },
  });
};

export default getStyles;
