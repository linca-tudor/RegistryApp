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

  const toggleDropdown = () => {
    isVisible ? setIsVisible(false) : openDropdown();
  };

  const openDropdown = () => {
    DropdownButton.current.measure((x, y, width, height, pageX, pageY) => {
      setDropdownTop(pageY + height);
      setDropdownLeft(pageX);
      setDropdownWidth(width);
    });
    setIsVisible(true);
  };

  const onItemPress = item => {
    console.log(`onItem press: ${item.name}`);
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
            setIsVisible(false);
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
        toggleDropdown();
      }}>
      {renderDropDown()}
    </TouchableOpacity>
  );
};

export default Dropdown;
