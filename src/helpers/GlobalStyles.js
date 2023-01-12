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
        height: 67.5,
        borderRadius: 12.5,
        marginVertical: 7.5,
        marginRight: 15,
        // overflow: 'hidden',
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
        position: 'absolute',
        alignSelf: 'flex-end',
        marginVertical: 21.75,
        opacity: 0.5,
        paddingRight: 10,
      },
      textContainer: {
        flexGrow: 1,
        marginLeft: 15,
        backgroundColor: Colors.magnolia,
        borderRadius: 5,
      },
      title: {
        fontSize: 13.5,
        color: Colors.lavander,
        paddingTop: 7.5,
        paddingHorizontal: 6,
      },
      inputContainer: {
        width: '100%',
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 6,
      },
      input: {
        fontSize: 16.5,
        fontWeight: '400',
        color: Colors.black,
        marginLeft: Platform.OS === 'android' ? -3.5 : 0,
      },
    },
  });
};

export default getGlobalStyles;
