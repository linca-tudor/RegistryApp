import React, {useState, useEffect} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '~/helpers/Colors';
import PhoneInput from 'react-native-phone-number-input-formatted';
import getGlobalStyles from '~/helpers/GlobalStyles';
import getStyles from '~/components/PhoneInputWithIcon/PhoneInputWithIcon.styles';

const PhoneInputWithIcon = ({
  placeholder,
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
  const [inputTextFormatted, setInputTextFormatted] = useState('');

  useEffect(() => {
    setInputText(text);
  }, [text]);

  return (
    <View style={globalStyles.form.container}>
      <View style={globalStyles.form.iconContainer}>{icon}</View>
      <View style={globalStyles.form.textContainer}>
        <Text style={globalStyles.form.title}>{title}</Text>
        <PhoneInput
          placeholder={placeholder}
          defaultValue={inputText}
          defaultCode="RO"
          layout="first"
          autoFocus={false}
          onChangeText={txt => {
            setInputText(txt);
          }}
          onChangeFormattedText={txt => {
            setInputTextFormatted(txt);
          }}
          containerStyle={styles.container}
          textContainerStyle={styles.textContainer}
          textInputStyle={styles.textInput}
          countryPickerButtonStyle={styles.countryPickerButton}
          flagButtonStyle={styles.flagButton}
          disableArrowIcon
        />
      </View>
      {inputText && (
        <TouchableOpacity
          onPress={() => {
            setInputText('');
            setInputTextFormatted('');
          }}
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

export default PhoneInputWithIcon;
