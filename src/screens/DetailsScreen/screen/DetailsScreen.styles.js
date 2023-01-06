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
      width: '100%',
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
      flex: 1,
      width: '100%',
      shadowColor: Colors.black,
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.1,
      shadowRadius: 3,
    },
    infoTextContainer: {
      marginTop: 15,
    },
    infoText: {
      fontSize: 16,
    },
    tabBar: {
      backgroundColor: Colors.white,
      marginBottom: 10,
      borderRadius: 25,
    },
    tabBarIndicator: {
      height: '100%',
      backgroundColor: Colors.lavander,
      borderRadius: 25,
      opacity: 0.1,
    },
    tabBarLabel: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    loadingAnimation: {
      backgroundColor: Colors.white,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
  });
};

export default getStyles;
