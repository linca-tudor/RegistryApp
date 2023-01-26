import React, {useRef, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  Modal,
  View,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import formattedHobbies from '~/assets/data/MOCK_DATA_HOBBIES';
import getStyles from './Dropdown.styles';
import Colors from '~/helpers/Colors';

const Dropdown = ({data, onSelect}) => {
  const styles = getStyles();
  const DropdownButton = useRef();
  const [dropdownTop, setDropdownTop] = useState(0);
  const [dropdownLeft, setDropdownLeft] = useState(0);
  const [dropdownWidth, setDropdownWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState('');

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

  const toggleDropdown = () => {
    console.log(
      `In toggleDropdown function before if() state is: ${isVisible}`,
    );
    isVisible ? setIsVisible(false) : openDropdown();
    console.log(`In toggleDropdown function after if() state is: ${isVisible}`);
  };

  const openDropdown = () => {
    DropdownButton.current.measure((x, y, width, height, pageX, pageY) => {
      setDropdownTop(pageY + height);
      setDropdownLeft(pageX);
      setDropdownWidth(width);
    });
    setIsVisible(true);
  };

  const onItemPress = ({item}) => {
    console.log(`onItem press: ${item}`);
    setSelected(item);
    onSelect(item);
    setIsVisible(false);
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

  const renderDropDown = () => {
    return (
      <Modal visible={isVisible} transparent animationType={'fade'}>
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => {
            console.log(
              `In renderDropdown function before if() state is: ${isVisible}`,
            );
            setIsVisible(false);
            console.log(
              `In renderDropdown function after if() state is: ${isVisible}`,
            );
          }}>
          <View
            style={[
              styles.dropdown,
              {
                top: dropdownTop,
                left: dropdownLeft,
                width: dropdownWidth,
                backgroundColor: Colors.paleLavender,
                height: 200,
              },
            ]}>
            <FlatList
              data={data}
              renderItem={({item}) => renderItem(item)}
              keyExtractor={(item, index) => index.toString()}
              estimatedItemSize={50}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <TouchableOpacity
      ref={DropdownButton}
      style={styles.button}
      onPress={() => {
        console.log(`In return function before if() state is: ${isVisible}`);
        toggleDropdown();
        console.log(`In return function after if() state is: ${isVisible}`);
      }}>
      {renderDropDown()}
    </TouchableOpacity>
  );
};

export default Dropdown;
