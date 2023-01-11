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
  value,
  onTextUpdate,
  onEndEditing,
  onCrossPress,
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
    <View style={[globalStyles.form.container, style]}>
      <View style={globalStyles.form.iconContainer}>{icon}</View>
      <View style={globalStyles.form.textContainer}>
        <Text style={globalStyles.form.title}>{title}</Text>
        <View style={globalStyles.form.inputContainer}>
          <RNTextInput
            placeholder={placeholder}
            placeholderTextColor={Colors.cloud}
            value={value}
            onChangeText={txt => {
              onTextUpdate(txt);
            }}
            // onEndEditing={txt => {
            //   onEndEditing(txt);
            // }}
            style={globalStyles.form.input}
          />
        </View>
      </View>
      {inputText && (
        <TouchableOpacity
          onPress={onCrossPress}
          style={globalStyles.form.crossIcon}>
          <Entypo
            name="circle-with-cross"
            size={24}
            color={Colors.ultramarineBlue}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextInputWithIcon;
