import React, {useState} from 'react';
import {Text, View} from 'react-native';
import getGlobalStyles from '~/helpers/GlobalStyles';
import getStyles from './UserForm.styles';
import Colors from '~/helpers/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import DateInputWithIcon from '~/components/DateInputWithIcon';
import PhoneInputWithIcon from '~/components/PhoneInputWithIcon';
import TextInputFieldWithIcon from '~/components/TextInputWithIcon';

const UserForm = ({onTextInput}) => {
  const [inputText, setInputText] = useState('');
  const styles = getStyles();

  return (
    <View style={styles.container}>
      <TextInputFieldWithIcon
        secureText={false}
        value={inputText}
        onTextUpdate={text => {
          setInputText(text);
        }}
        // onEndEditing={text => {
        //   onTextInput(text);
        // }}
        onCrossPress={() => {
          setInputText('');
        }}
        style={styles.textInput}
        text={inputText}
        title="First Name"
        placeholder="John / Jane"
        icon={
          <MaterialIcons
            name="drive-file-rename-outline"
            size={30}
            color={Colors.lavander}
          />
        }
      />
      <TextInputFieldWithIcon
        secureText={false}
        value={inputText}
        onTextUpdate={text => {
          setInputText(text);
        }}
        // onEndEditing={text => {
        //   onTextInput(text);
        // }}
        onCrossPress={() => {
          setInputText('');
        }}
        style={styles.textInput}
        text={inputText}
        title="Last Name"
        placeholder="Doe"
        icon={
          <MaterialIcons
            name="drive-file-rename-outline"
            size={30}
            color={Colors.lavander}
          />
        }
      />
      <TextInputFieldWithIcon
        secureText={false}
        value={inputText}
        onTextUpdate={text => {
          setInputText(text);
        }}
        // onEndEditing={text => {
        //   onTextInput(text);
        // }}
        onCrossPress={() => {
          setInputText('');
        }}
        style={styles.textInput}
        text={inputText}
        title="Gender"
        placeholder="Any <3"
        icon={
          <MaterialCommunityIcons
            name="gender-non-binary"
            size={40}
            color={Colors.lavander}
          />
        }
      />
      <DateInputWithIcon
        secureText={false}
        value={inputText}
        onTextUpdate={text => {
          setInputText(text);
        }}
        // onEndEditing={text => {
        //   onTextInput(text);
        // }}
        onCrossPress={() => {
          setInputText('');
        }}
        style={styles.textInput}
        text={inputText}
        title="Birthdate"
        placeholder="birthdate goes here"
        icon={
          <MaterialCommunityIcons
            name="calendar-multiselect"
            size={30}
            color={Colors.lavander}
          />
        }
      />
      <TextInputFieldWithIcon
        secureText={false}
        value={inputText}
        onTextUpdate={text => {
          setInputText(text);
        }}
        // onEndEditing={text => {
        //   onTextInput(text);
        // }}
        onCrossPress={() => {
          setInputText('');
        }}
        style={styles.textInput}
        text={inputText}
        title="Address"
        placeholder="First Street"
        icon={
          <MaterialCommunityIcons
            name="home-map-marker"
            size={35}
            color={Colors.lavander}
          />
        }
      />
      <TextInputFieldWithIcon
        secureText={false}
        value={inputText}
        onTextUpdate={text => {
          setInputText(text);
        }}
        // onEndEditing={text => {
        //   onTextInput(text);
        // }}
        onCrossPress={() => {
          setInputText('');
        }}
        style={styles.textInput}
        text={inputText}
        title="E-mail Address"
        placeholder="myemail@domain.com"
        icon={
          <MaterialCommunityIcons
            name="email-outline"
            size={30}
            color={Colors.lavander}
          />
        }
      />

      <TextInputFieldWithIcon
        secureText={false}
        value={inputText}
        onTextUpdate={text => {
          setInputText(text);
        }}
        // onEndEditing={text => {
        //   onTextInput(text);
        // }}
        onCrossPress={() => {
          setInputText('');
        }}
        style={styles.textInput}
        text={inputText}
        title="Job Title"
        placeholder="Developer"
        icon={
          <MaterialCommunityIcons
            name="tools"
            size={30}
            color={Colors.lavander}
          />
        }
      />
      <TextInputFieldWithIcon
        secureText={false}
        value={inputText}
        onTextUpdate={text => {
          setInputText(text);
        }}
        // onEndEditing={text => {
        //   onTextInput(text);
        // }}
        onCrossPress={() => {
          setInputText('');
        }}
        style={styles.textInput}
        text={inputText}
        title="Favourite Quote"
        placeholder="Roses are red, violets are blue"
        icon={<Foundation name="quote" size={32.5} color={Colors.lavander} />}
      />
    </View>
  );
};

export default UserForm;
