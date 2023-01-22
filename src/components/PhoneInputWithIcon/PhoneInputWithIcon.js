import React, {useState, useEffect} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '~/helpers/Colors';
import PhoneInput from 'react-native-phone-number-input-formatted';
import getGlobalStyles from '~/helpers/GlobalStyles';
import getStyles from '~/components/PhoneInputWithIcon/PhoneInputWithIcon.styles';

const PhoneInputWithIcon = ({
  placeholder,
  style,
  icon,
  title,
  text,
  onChangeInput,
}) => {
  const styles = getStyles();
  const globalStyles = getGlobalStyles();
  const [inputText, setInputText] = useState('');
  const [inputTextFormatted, setInputTextFormatted] = useState('');

  useEffect(() => {
    setInputText(text);
  }, [text]);

  return (
    <View style={globalStyles.formItem.container}>
      <View style={globalStyles.formItem.iconContainer}>{icon}</View>
      <View style={globalStyles.formItem.textContainer}>
        <Text style={globalStyles.formItem.title}>{title}</Text>
        <PhoneInput
          placeholder={placeholder}
          defaultValue={inputTextFormatted}
          defaultCode="RO"
          layout="first"
          disableArrowIcon
          autoFocus={false}
          onChangeText={txt => {
            setInputText(txt);
          }}
          onChangeFormattedText={txt => {
            onChangeInput(txt);
          }}
          containerStyle={styles.container}
          textContainerStyle={styles.textContainer}
          textInputStyle={styles.textInput}
          countryPickerButtonStyle={styles.countryPickerButton}
          flagButtonStyle={styles.flagButton}
        />
      </View>
      {inputTextFormatted && (
        <TouchableOpacity
          onPress={() => {
            setInputText('');
            setInputTextFormatted('');
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
  );
};

export default PhoneInputWithIcon;
