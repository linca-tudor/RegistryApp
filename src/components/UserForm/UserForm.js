import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import moment from 'moment';
import DateInputWithIcon from '~/components/DateInputWithIcon';
import PhoneInputWithIcon from '~/components/PhoneInputWithIcon';
import TextInputFieldWithIcon from '~/components/TextInputWithIcon';
import HobbiesInputWithIcon from '~/components/HobbiesInputWithIcon';
import Button from '~/components/Button';
import getGlobalStyles from '~/helpers/GlobalStyles';
import getStyles from './UserForm.styles';
import Colors from '~/helpers/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UserForm = ({onSubmitPress, profile, buttonTitle}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [job, setJob] = useState('');
  const [quote, setQuote] = useState('');
  const [hobbies, setHobbies] = useState([]);
  const styles = getStyles();
  const globalStyles = getGlobalStyles();

  useEffect(() => {
    if (profile) {
      setFirstName(profile.firstName);
      setLastName(profile.lastName);
      setGender(profile.gender);
      setPhoneNumber(profile.phoneNumber);
      setBirthDate(moment(profile.birthDate).toDate());
      setAddress(profile.address);
      setEmail(profile.email);
      setJob(profile.job);
      setQuote(profile.quote);
    }
  }, [profile]);

  return (
    <View style={[globalStyles.flex, styles.container]}>
      <TextInputFieldWithIcon
        onEndEditing={text => {
          setFirstName(text);
        }}
        value={firstName}
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
        onEndEditing={text => {
          setLastName(text);
        }}
        style={styles.textInput}
        value={lastName}
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
        onEndEditing={text => {
          setGender(text);
        }}
        style={styles.textInput}
        value={gender}
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
        placeholder={new Date()}
        icon={
          <MaterialCommunityIcons
            name="calendar-multiselect"
            size={35}
            color={Colors.lavander}
          />
        }
      />
      <PhoneInputWithIcon
        onEndEditing={text => {
          setPhoneNumber(text);
        }}
        value={phoneNumber}
        title="Phone Number"
        placeholder="(021) 234-5678"
        icon={
          <MaterialCommunityIcons
            name="phone-dial"
            size={35}
            color={Colors.lavander}
          />
        }
      />
      <TextInputFieldWithIcon
        onEndEditing={text => {
          setAddress(text);
        }}
        style={styles.textInput}
        value={address}
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
        onEndEditing={text => {
          setEmail(text);
        }}
        style={styles.textInput}
        value={email}
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
      <HobbiesInputWithIcon
        onEndEditing={text => {
          setHobbies(text);
        }}
        style={styles.textInput}
        value={hobbies}
        title="Hobbies"
        placeholder="Playing guitar"
        icon={
          <Ionicons name="game-controller" size={35} color={Colors.lavander} />
        }
      />
      <TextInputFieldWithIcon
        onEndEditing={text => {
          setJob(text);
        }}
        onCrossPress={() => {
          setJob('');
        }}
        style={styles.textInput}
        value={job}
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
        onEndEditing={text => {
          setQuote(text);
        }}
        onCrossPress={() => {
          setQuote('');
        }}
        style={styles.textInput}
        value={quote}
        title="Favourite Quote"
        placeholder="Roses are red, violets are blue"
        icon={<Foundation name="quote" size={37.5} color={Colors.lavander} />}
      />
      <Button
        onPress={() => {
          onSubmitPress({
            avatar:
              'http://www.geek-officiel.com/wp-content/uploads/2015/06/gecko.jpg',
            firstName: firstName,
            lastName: lastName,
            email: email,
            gender: gender,
            quote: quote,
            address: address,
            phoneNumber: phoneNumber,
            birthDate: moment(birthDate).format('YYYY-MM-DD'),
            job: job,
          });
        }}
        title={buttonTitle}
        containerStyle={{marginTop: 20, marginBottom: 30}}
      />
    </View>
  );
};

export default UserForm;
