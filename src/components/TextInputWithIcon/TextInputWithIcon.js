import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  View,
  TextInput as RNTextInput,
  Text,
} from 'react-native';
import SimpleLineDivider from '~/components/SimpleLineDivider';
import Entypo from 'react-native-vector-icons/Entypo';
import getStyles from './TextInputWithIcon.styles';
import Colors from '~/helpers/Colors';
import getGlobalStyles from '~/helpers/GlobalStyles';

const TextInputWithIcon = ({
  placeholder,
  onChangeText,
  onBlur,
  style,
  icon,
  title,
  value,
}) => {
  const styles = getStyles();
  const globalStyles = getGlobalStyles();

  const renderCrossIcon = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          onChangeText('');
        }}
        style={globalStyles.formItem.crossIcon}>
        <Entypo
          name="circle-with-cross"
          size={24}
          color={Colors.ultramarineBlue}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={[globalStyles.formItem.container, style]}>
      <View style={globalStyles.formItem.iconContainer}>{icon}</View>
      <View>
        <SimpleLineDivider
          orientation={'vertical'}
          thickness={2}
          color={Colors.warmGrey}
          borderRadius={1}
          margin={11.8}
        />
      </View>
      <View style={globalStyles.formItem.textContainer}>
        <Text style={globalStyles.formItem.title}>{title}</Text>
        <View style={globalStyles.formItem.inputContainer}>
          <RNTextInput
            placeholder={placeholder}
            placeholderTextColor={Colors.starDust}
            value={value}
            onChangeText={txt => {
              onChangeText(txt);
            }}
            onBlur={txt => {
              onBlur(txt);
            }}
            style={globalStyles.formItem.input}
          />
          {value && renderCrossIcon()}
        </View>
      </View>
    </View>
  );
};

export default TextInputWithIcon;
