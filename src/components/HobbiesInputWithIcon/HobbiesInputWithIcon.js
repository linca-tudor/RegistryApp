import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import getStyles from './HobbiesInputWithIcon.styles';
import getGlobalStyles from '~/helpers/GlobalStyles';
import Colors from '~/helpers/Colors';
import {formattedHobbies} from '~/assets/data/MOCK_DATA_HOBBIES';
import BubbleList from '~/components//BubbleList';
import SimpleLineDivider from '~/components/SimpleLineDivider';
import InputFieldWithDropdown from '~/components/InputFieldWithDropdown';

const HobbiesInputWithIcon = ({
  placeholder,
  onEndEditing,
  style,
  icon,
  title,
  value,
}) => {
  const styles = getStyles();
  const globalStyles = getGlobalStyles();
  const [inputText, setInputText] = useState('');

  const data = formattedHobbies;

  useEffect(() => {
    setInputText(value);
  }, [value]);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.iconContainer}>{icon}</View>
      <View>
        <SimpleLineDivider
          orientation={'vertical'}
          thickness={2}
          color={Colors.warmGrey}
          borderRadius={1}
          margin={11.8}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        {/* {selectedHobbies.length > 0 && <BubbleList items={selectedHobbies} />} */}
        <InputFieldWithDropdown
          placeholder={placeholder}
          value={inputText}
          data={data}
          onChangeText={txt => setInputText(txt)}
          onEndEditing={() => onEndEditing(inputText)}
        />
      </View>
    </View>
  );
};

export default HobbiesInputWithIcon;
