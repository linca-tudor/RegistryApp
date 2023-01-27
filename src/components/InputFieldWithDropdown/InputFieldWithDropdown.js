import React, {useState, useEffect, useCallback} from 'react';
import ReactNative, {
  TouchableOpacity,
  View,
  TextInput as RNTextInput,
  Text,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import Entypo from 'react-native-vector-icons/Entypo';
import getStyles from './InputFieldWithDropdown.styles';
import getGlobalStyles from '~/helpers/GlobalStyles';
import Colors from '~/helpers/Colors';
import {formattedHobbies} from '~/assets/data/MOCK_DATA_HOBBIES';

const HobbiesInputWithIcon = ({
  placeholder,
  value,
  data,
  onChangeText,
  onEndEditing,
  onCrossPress,
}) => {
  const styles = getStyles();
  const globalStyles = getGlobalStyles();
  const [inputText, setInputText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [filteredData, setFilteredData] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [selected, setSelected] = useState('');

  useEffect(() => {
    setInputText(value);
  }, [value]);

  const onItemPress = item => {
    console.log(`onItem press: ${item.name}`);
    setSelected(item);
    console.log(item);
  };

  const openDropdown = () => {
    setIsVisible(true);
  };

  const closeDropdown = () => {
    setIsVisible(false);
  };

  const renderItem = item => {
    return (
      <TouchableOpacity
        style={styles.dropdownItem}
        onPress={() => {
          onItemPress(item);
        }}>
        <Text style={[styles.itemText]}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.inputContainer}>
        <RNTextInput
          placeholder={placeholder}
          placeholderTextColor={Colors.starDust}
          value={inputText}
          style={styles.input}
          onFocus={openDropdown}
          onChangeText={txt => {
            setInputText(txt);
          }}
          onEndEditing={() => {
            closeDropdown();
            onEndEditing(inputText);
          }}
        />
        {inputText && (
          <TouchableOpacity
            onPress={() => {
              setInputText('');
            }}
            style={styles.crossIcon}>
            <Entypo
              name="circle-with-cross"
              size={24}
              color={Colors.ultramarineBlue}
            />
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity onPress={closeDropdown}>
        {isVisible && (
          <View style={[styles.dropdown]}>
            <FlashList
              data={formattedHobbies}
              renderItem={({item}) => renderItem(item)}
              keyExtractor={(item, index) => index.toString()}
              estimatedItemSize={50}
            />
          </View>
        )}
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default HobbiesInputWithIcon;
