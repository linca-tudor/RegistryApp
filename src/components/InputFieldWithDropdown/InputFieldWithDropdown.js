import React, {useState, useEffect, useCallback} from 'react';
import ReactNative, {
  TouchableOpacity,
  View,
  TextInput as RNTextInput,
  Text,
} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import Entypo from 'react-native-vector-icons/Entypo';
import getStyles from './InputFieldWithDropdown.styles';
import getGlobalStyles from '~/helpers/GlobalStyles';
import Colors from '~/helpers/Colors';
import {formattedHobbies} from '~/assets/data/MOCK_DATA_HOBBIES';
import BubbleList from '~/components//BubbleList';
import SimpleLineDivider from '~/components/SimpleLineDivider';
import Dropdown from '~/components/Dropdown';

const HobbiesInputWithIcon = ({placeholder, value, data}) => {
  const styles = getStyles();
  const globalStyles = getGlobalStyles();
  const [isVisible, setIsVisible] = useState(false);
  const [inputText, setInputText] = useState('');
  const [filteredData, setFilteredData] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [selected, setSelected] = useState('');

  const onItemPress = item => {
    console.log(`onItem press: ${item.name}`);
    setSelected(item);
    console.log(item);
  };

  const toggleDropdown = () => {
    isVisible ? setIsVisible(false) : openDropdown();
  };

  const openDropdown = () => {
    setIsVisible(true);
  };

  const renderItem = item => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          onItemPress(item);
        }}>
        <Text style={{color: Colors.black}}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.textContainer}>
      <View style={styles.inputContainer}>
        <RNTextInput
          placeholder={placeholder}
          placeholderTextColor={Colors.starDust}
          value={inputText}
          onChangeText={txt => {
            setInputText(txt);
          }}
          style={styles.input}
          onFocus={() => {
            setIsInputFocused(true);
            setIsVisible(true);
          }}
          onEndEditing={() => {
            setIsInputFocused(false);
            setIsVisible(false);
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
      <TouchableOpacity
        style={styles.overlay}
        onPress={() => {
          setIsVisible(false);
        }}>
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
    </View>
  );
};

export default HobbiesInputWithIcon;
