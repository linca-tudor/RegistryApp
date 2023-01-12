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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [job, setJob] = useState('');
  const [quote, setQuote] = useState('');
  const [birthDate, setBirthDate] = useState(null);
  const styles = getStyles();
  const globalStyles = getGlobalStyles();

  return (
    <View style={[globalStyles.flex, styles.container]}>
      <TextInputFieldWithIcon
        secureText={false}
        onEndEditing={text => {
          setFirstName(text);
        }}
        text={firstName}
        title="First Name"
        placeholder="John / Jane"
        icon={
          <MaterialIcons
            name="drive-file-rename-outline"
            size={35}
            color={Colors.lavander}
          />
        }
      />
      <TextInputFieldWithIcon
        secureText={false}
        onEndEditing={text => {
          setLastName(text);
        }}
        style={styles.textInput}
        text={lastName}
        title="Last Name"
        placeholder="Doe"
        icon={
          <MaterialIcons
            name="drive-file-rename-outline"
            size={35}
            color={Colors.lavander}
          />
        }
      />
      <TextInputFieldWithIcon
        secureText={false}
        onEndEditing={text => {
          setGender(text);
        }}
        style={styles.textInput}
        text={gender}
        title="Gender"
        placeholder="Any <3"
        icon={
          <MaterialCommunityIcons
            name="gender-non-binary"
            size={45}
            color={Colors.lavander}
          />
        }
      />
      <DateInputWithIcon
        onEndEditing={date => {
          setBirthDate(date);
        }}
        onCrossPress={() => {
          setBirthDate(null);
        }}
        style={styles.textInput}
        date={birthDate}
        title="Birthdate"
        placeholder="Select your date of birth"
        icon={
          <MaterialCommunityIcons
            name="calendar-multiselect"
            size={35}
            color={Colors.lavander}
          />
        }
      />
      <TextInputFieldWithIcon
        secureText={false}
        onEndEditing={text => {
          setAddress(text);
        }}
        style={styles.textInput}
        text={address}
        title="Address"
        placeholder="First Street"
        icon={
          <MaterialCommunityIcons
            name="home-map-marker"
            size={40}
            color={Colors.lavander}
          />
        }
      />
      <TextInputFieldWithIcon
        secureText={false}
        onEndEditing={text => {
          setEmail(text);
        }}
        style={styles.textInput}
        text={email}
        title="E-mail Address"
        placeholder="myemail@domain.com"
        icon={
          <MaterialCommunityIcons
            name="email-outline"
            size={35}
            color={Colors.lavander}
          />
        }
      />

      <TextInputFieldWithIcon
        secureText={false}
        onEndEditing={text => {
          setJob(text);
        }}
        onCrossPress={() => {
          setJob('');
        }}
        style={styles.textInput}
        text={job}
        title="Job Title"
        placeholder="Developer"
        icon={
          <MaterialCommunityIcons
            name="tools"
            size={35}
            color={Colors.lavander}
          />
        }
      />
      <TextInputFieldWithIcon
        secureText={false}
        onEndEditing={text => {
          setQuote(text);
        }}
        onCrossPress={() => {
          setQuote('');
        }}
        style={styles.textInput}
        text={quote}
        title="Favourite Quote"
        placeholder="Roses are red, violets are blue"
        icon={<Foundation name="quote" size={37.5} color={Colors.lavander} />}
      />
    </View>
  );
};

export default UserForm;
