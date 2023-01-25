import React, {useState, useEffect, useCallback} from 'react';
import ReactNative, {
  TouchableOpacity,
  View,
  TextInput as RNTextInput,
  Text,
} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import Entypo from 'react-native-vector-icons/Entypo';
import getStyles from './HobbiesInputWithIcon.styles';
import getGlobalStyles from '~/helpers/GlobalStyles';
import Colors from '~/helpers/Colors';
import {formattedHobbies} from '~/assets/data/MOCK_DATA_HOBBIES';
import BubbleList from '~/components//BubbleList';
import SimpleLineDivider from '~/components/SimpleLineDivider';

const HobbiesInputWithIcon = ({placeholder, style, icon, title, value}) => {
  const styles = getStyles();
  const globalStyles = getGlobalStyles();
  const [inputText, setInputText] = useState('');
  const [filteredData, setFilteredData] = useState('');
  const [showDropDown, setShowDropdown] = useState(false);

  useEffect(() => {
    setFilteredData(formattedHobbies);
  }, [filteredData]);

  const renderDropDown = () => {
    return (
      <View style={{height: 100, width: '100%', backgroundColor: 'magenta'}}>
        <Text>Dropdown</Text>
      </View>
    );
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
        size={50}
        thickness={2}
        color={Colors.warmGrey}
        borderRadius={1}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <BubbleList items={selectedHobbies} />
        <View style={styles.inputContainer}>
          <RNTextInput
            placeholder={placeholder}
            placeholderTextColor={Colors.starDust}
            value={inputText}
            onChangeText={txt => {
              setInputText(txt);
            }}
            style={styles.input}
            onFocus={() => setShowDropdown(true)}
            onEndEditing={() => {
              setShowDropdown(false);
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
        {showDropDown && renderDropDown()}
        {/* {inputText && (
          <FlashList
            data={filteredData}
            // keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <Text>{item.name}</Text>}
            estimatedItemSize={50}
          />
        )} */}
      </View>
    </View>
  );
};

export default HobbiesInputWithIcon;
