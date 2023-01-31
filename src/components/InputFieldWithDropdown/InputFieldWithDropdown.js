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
import Colors from '~/helpers/Colors';
import difference from 'lodash.difference';

const HobbiesInputWithIcon = ({
  placeholder,
  value,
  data,
  selected,
  onItemPress,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [filteredData, setFilteredData] = useState('');
  const [crossIconPosition, setCrossIconPosition] = useState('center');
  const styles = getStyles(crossIconPosition);

  useEffect(() => {
    setInputText(value);
  }, [value]);

  useEffect(() => {
    const filterData = query => {
      const result = difference(data, selected);

      if (!query) {
        return result;
      }

      const formattedInput = query.toLowerCase().replace(/\s+/g, '');

      const filteredResult = result.filter(element => {
        return element.name
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(formattedInput);
      });

      return filteredResult;
    };

    setFilteredData(filterData(inputText));
  }, [inputText, data, selected]);

  useEffect(() => {
    if (filteredData.length > 0 && isFocused) {
      openDropdown();
    } else {
      closeDropdown();
    }
  }, [isFocused, filteredData]);

  useEffect(() => {
    if (selected.length > 0) {
      setCrossIconPosition('bottom');
    } else {
      setCrossIconPosition('center');
    }
  }, [selected]);

  const openDropdown = () => {
    setIsVisible(true);
  };

  const closeDropdown = () => {
    setIsVisible(false);
  };

  const renderDropDown = () => {
    return (
      <View style={styles.dropdown}>
        <View
          style={{
            height: 10,
            width: '100%',
            backgroundColor: Colors.magnolia,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        />
        <FlashList
          data={filteredData}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={(item, index) => index.toString()}
          estimatedItemSize={50}
        />
      </View>
    );
  };

  const renderCrossIcon = () => {
    return (
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
    );
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
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          onChangeText={txt => {
            setInputText(txt);
          }}
        />
        {inputText && renderCrossIcon()}
      </View>
      <TouchableOpacity onPress={closeDropdown}>
        {isVisible && renderDropDown()}
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default HobbiesInputWithIcon;
