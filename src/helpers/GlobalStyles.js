import {Platform, StyleSheet} from 'react-native';
import Colors from '~/helpers/Colors';

const getGlobalStyles = () => {
  return StyleSheet.create({
    flex: {
      flex: 1,
    },
    formItem: {
      container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 7.5,
      },
      iconContainer: {
        height: 43.9,
        width: 50,
        justifyContent: 'center',
        alignItems: 'flex-start',
      },
      crossIcon: {
        position: 'absolute',
        bottom: 21.95,
        opacity: 0.5,
        paddingRight: 10,
      },
      textContainer: {
        flexGrow: 1,
        marginLeft: 15,
        backgroundColor: Colors.magnolia,
        borderRadius: 10,
      },
      title: {
        fontSize: 13.5,
        color: Colors.lavander,
        marginTop: 7.5,
        marginLeft: 6,
      },
      inputContainer: {
        height: 42.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 6,
      },
      input: {
        flex: 1,
        fontSize: 16.5,
        fontWeight: '400',
        color: Colors.black,
        marginLeft: Platform.OS === 'android' ? -3.5 : 0,
        marginRight: 35,
      },
    },
  });
};

export default getGlobalStyles;
