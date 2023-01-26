import React, {useState, useEffect, useCallback} from 'react';
import ReactNative, {
  TouchableOpacity,
  View,
  TextInput as RNTextInput,
  Text,
} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import Entypo from 'react-native-vector-icons/Entypo';
import getStyles from './DropdownInputWithIcon.styles';
import getGlobalStyles from '~/helpers/GlobalStyles';
import Colors from '~/helpers/Colors';
import {formattedHobbies} from '~/assets/data/MOCK_DATA_HOBBIES';
import BubbleList from '~/components//BubbleList';
import SimpleLineDivider from '~/components/SimpleLineDivider';
import Dropdown from '~/components/Dropdown';

const HobbiesInputWithIcon = ({placeholder, style, icon, title, value}) => {
  const styles = getStyles();
  const globalStyles = getGlobalStyles();
  const [inputText, setInputText] = useState('');
  const [filteredData, setFilteredData] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [fieldHeight, setFieldHeight] = useState(null);

  useEffect(() => {
    setFilteredData(formattedHobbies);
  }, [filteredData]);

  const onLayout = event => {
    const {x, y, height, width} = event.nativeEvent.layout;
    setFieldHeight(height);
  };

  const selectedHobbies = [
    {
      name: 'Reading',
    },
    {
      name: 'Research',
    },
    {
      name: 'Shortwave listening',
    },
    {
      name: 'Audiophile',
    },
    {
      name: 'Aircraft spotting',
    },
    {
      name: 'Reading',
    },
    {
      name: 'Research',
    },
    {
      name: 'Shortwave listening',
    },
    {
      name: 'Audiophile',
    },
    {
      name: 'Aircraft spotting',
    },
  ];

  return (
    <View style={[styles.container, style]}>
      <View style={styles.iconContainer}>{icon}</View>
      <SimpleLineDivider
        orientation={'vertical'}
        size={fieldHeight - 23.6}
        thickness={2}
        color={Colors.warmGrey}
        borderRadius={1}
        style={{marginTop: 11.8}}
      />
      <View style={styles.textContainer} onLayout={onLayout}>
        <Text style={styles.title}>{title}</Text>
        {selectedHobbies.length > 0 && <BubbleList items={selectedHobbies} />}
        <View style={styles.inputContainer}>
          <RNTextInput
            placeholder={placeholder}
            placeholderTextColor={Colors.starDust}
            value={inputText}
            onChangeText={txt => {
              setInputText(txt);
            }}
            style={styles.input}
            onFocus={() => setIsInputFocused(true)}
            onEndEditing={() => {
              setIsInputFocused(false);
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
        <Dropdown
          data={formattedHobbies}
          onSelect={item => {
            console.log(item);
          }}
        />
      </View>
    </View>
  );
};

export default HobbiesInputWithIcon;
