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

const Dropdown = ({data, onSelect, isVisible}) => {
  const styles = getStyles();
  const DropdownButton = useRef();
  const [dropdownTop, setDropdownTop] = useState(0);
  const [dropdownLeft, setDropdownLeft] = useState(0);
  const [dropdownWidth, setDropdownWidth] = useState(0);





  return (
    <Modal visible={isVisible} animationType={'fade'} statusBarTranslucent>

    </Modal>
  );
};

export default Dropdown;
