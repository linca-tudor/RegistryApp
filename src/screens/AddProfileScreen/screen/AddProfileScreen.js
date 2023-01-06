import React, {useState} from 'react';
import {Text, View} from 'react-native';
import TextInputIcon from '~/components/TextInputIcon';
import getGlobalStyles from '~/helpers/GlobalStyles';
import getStyles from './AddProfileScreen.styles';
import Colors from '~/helpers/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AddProfileScreen = ({}) => {
  const [inputText, setInputText] = useState('');
  const globalStyles = getGlobalStyles();
  const styles = getStyles();
  return (
    <View style={[globalStyles.flex, styles.container]}>
      <Text style={{color: 'black'}}>Add Screen</Text>
      <TextInputIcon
        placeholder="Input Field"
        secureText={false}
        value={inputText}
        onTextUpdate={text => {
          setInputText(text);
        }}
        onCrossPress={() => {
          setInputText('');
        }}
        style={styles.textInput}
        text={inputText}
        title="usernameTextInputTitle"
        icon={<AntDesign name="user" size={30} color={Colors.black} />}
      />
    </View>
  );
};

export default AddProfileScreen;
