import {Platform, StyleSheet} from 'react-native';
import Colors from '~/helpers/Colors';

const getGlobalStyles = () => {
  return StyleSheet.create({
    flex: {
      flex: 1,
    },
    form: {
      container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 67.5,
        borderRadius: 12.5,
        paddingRight: 15,
        backgroundColor: Colors.white,
        marginVertical: 7.5,
      },
      iconContainer: {
        height: '65%',
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: Colors.warmGrey,
        borderRightWidth: 2,
      },
      crossIcon: {
        opacity: 0.5,
        alignSelf: 'center',
        marginLeft: 'auto',
      },
      textContainer: {
        flexGrow: 1,
        paddingTop: 7.5,
        marginLeft: 15,
        overflow: 'hidden',
        backgroundColor: Colors.magnolia,
        borderRadius: 5,
      },
      title: {
        flex: 1,
        fontSize: 13.5,
        color: Colors.lavander,
        paddingLeft: 6,
      },
      inputContainer: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
        paddingLeft: 6,
      },
      input: {
        fontSize: 16.5,
        fontWeight: '400',
        paddingRight: 10,
        color: Colors.black,
        marginLeft: Platform.OS === 'android' ? -3.5 : 0,
      },
    },
  });
};

export default getGlobalStyles;
