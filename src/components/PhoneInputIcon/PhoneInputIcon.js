import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  View,
  TextInput as RNTextInput,
  Text,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import getStyles from './PhoneInputIcon.styles';
import Colors from '~/helpers/Colors';
import PhoneInput from 'react-native-phone-number-input-formatted';
import {CardStyleInterpolators} from '@react-navigation/stack';

const PhoneInputIcon = ({
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
  const styles = getStyles('');
  const [inputText, setInputText] = useState('');
  const [inputTextFormatted, setInputTextFormatted] = useState('');

  useEffect(() => {
    setInputText(text);
  }, [text]);

  return (
    <View style={[style, styles.container]}>
      <View style={styles.iconContainer}>{icon}</View>
      <TouchableOpacity style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.inputContainer}>
          <PhoneInput
            // ref={phoneInput}
            defaultValue={inputText}
            defaultCode="RO"
            layout="first"
            onChangeText={text => {
              setInputText(text);
            }}
            onChangeFormattedText={text => {
              setInputTextFormatted(text);
            }}
            textContainerStyle={{backgroundColor: Colors.white}}
            containerStyle={{width: '100%', backgroundColor: 'magenta'}}
          />
        </View>
      </TouchableOpacity>
      {inputText && (
        <TouchableOpacity onPress={onCrossPress} style={styles.crossIcon}>
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

export default PhoneInputIcon;
