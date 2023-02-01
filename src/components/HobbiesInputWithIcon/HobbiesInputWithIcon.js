import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import getStyles from './HobbiesInputWithIcon.styles';
import getGlobalStyles from '~/helpers/GlobalStyles';
import Colors from '~/helpers/Colors';
import BubbleList from '~/components//BubbleList';
import SimpleLineDivider from '~/components/SimpleLineDivider';
import InputFieldWithDropdown from '~/components/InputFieldWithDropdown';

const HobbiesInputWithIcon = ({
  placeholder,
  suggestions,
  hobbies,
  addHobby,
  removeHobby,
  style,
  icon,
  title,
  hasScrollableParent,
  updateParentScrollStatus,
}) => {
  const styles = getStyles();
  const globalStyles = getGlobalStyles();

  const [inputText, setInputText] = useState('');

  const renderBubbleList = () => {
    return (
      <BubbleList items={hobbies} removeItem={hobby => removeHobby(hobby)} />
    );
  };

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
        {hobbies?.length > 0 && renderBubbleList()}
        <InputFieldWithDropdown
          placeholder={placeholder}
          value={inputText}
          data={suggestions}
          selected={hobbies}
          addItem={hobby => addHobby(hobby)}
          hasScrollableParent={hasScrollableParent}
          updateParentScrollStatus={updateParentScrollStatus}
        />
      </View>
    </View>
  );
};

export default HobbiesInputWithIcon;
