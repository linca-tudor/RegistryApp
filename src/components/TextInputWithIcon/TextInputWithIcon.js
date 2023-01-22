import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  View,
  TextInput as RNTextInput,
  Text,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import getStyles from './TextInputWithIcon.styles';
import Colors from '~/helpers/Colors';
import getGlobalStyles from '~/helpers/GlobalStyles';

const TextInputWithIcon = ({
  placeholder,
  onEndEditing,
  style,
  icon,
  title,
  text,
}) => {
  const styles = getStyles();
  const globalStyles = getGlobalStyles();
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    setInputText(text);
  }, [text]);

  return (
    <View style={[globalStyles.formItem.container, style]}>
      <View style={globalStyles.formItem.iconContainer}>{icon}</View>
      <View style={globalStyles.formItem.textContainer}>
        <Text style={globalStyles.formItem.title}>{title}</Text>
        <View style={globalStyles.formItem.inputContainer}>
          <RNTextInput
            placeholder={placeholder}
            placeholderTextColor={Colors.starDust}
            value={inputText}
            onChangeText={txt => {
              setInputText(txt);
            }}
            onEndEditing={() => {
              onEndEditing(inputText);
            }}
            style={globalStyles.formItem.input}
          />
        </View>
        {inputText && (
          <TouchableOpacity
            onPress={() => {
              setInputText('');
            }}
            style={globalStyles.formItem.crossIcon}>
            <Entypo
              name="circle-with-cross"
              size={24}
              color={Colors.ultramarineBlue}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TextInputWithIcon;
