import {StyleSheet} from 'react-native';
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
        height: 75,
        borderRadius: 12.5,
        paddingRight: 15,
        backgroundColor: Colors.white,
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
        paddingTop: 12.5,
        marginLeft: 15,
        overflow: 'hidden',
      },
      title: {
        flex: 1,
        fontSize: 13.5,
        color: Colors.warmGrey,
      },
      inputContainer: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
      },
      input: {
        fontSize: 16.5,
        fontWeight: '400',
        paddingRight: 10,
        color: Colors.black,
      },
    },
  });
};

export default getGlobalStyles;
