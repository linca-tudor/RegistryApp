import React, {useState, useEffect} from 'react';
import {
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

const HobbiesInputWithIcon = ({placeholder, style, icon, title, value}) => {
  const styles = getStyles();
  const globalStyles = getGlobalStyles();
  const [inputText, setInputText] = useState('');
  const [filteredData, setFilteredData] = useState('');

  useEffect(() => {
    setFilteredData(formattedHobbies);
  }, [filteredData]);

  const renderItem = ({item}, onPress) => {
    return <Text style={{height: 100, width: 50}}>item</Text>;
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
  ];

  return (
    <View style={[globalStyles.formItem.container, style]}>
      <View style={globalStyles.formItem.iconContainer}>{icon}</View>
      <View style={globalStyles.formItem.textContainer}>
        <Text style={globalStyles.formItem.title}>{title}</Text>
        <BubbleList items={selectedHobbies} />
        <View style={styles.inputContainer}>
          <RNTextInput
            placeholder={placeholder}
            placeholderTextColor={Colors.starDust}
            value={inputText}
            onChangeText={txt => {
              setInputText(txt);
            }}
            style={globalStyles.formItem.input}
          />
        </View>
        {inputText && (
          <TouchableOpacity
            onPress={() => {
              setInputText('');
            }}
            style={globalStyles.formItem.crossIcon}>
            <Entypo
              name="circle-with-cross"
              size={24}
              color={Colors.ultramarineBlue}
            />
          </TouchableOpacity>
        )}
        {inputText && (
          <FlashList
            data={filteredData}
            // keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <Text>{item.name}</Text>}
            estimatedItemSize={50}
          />
        )}
      </View>
    </View>
  );
};

export default HobbiesInputWithIcon;
