import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import 'yup-phone';
import * as RNLocalize from 'react-native-localize';
import moment from 'moment';
import DateInputWithIcon from '~/components/DateInputWithIcon';
import PhoneInputWithIcon from '~/components/PhoneInputWithIcon';
import HobbiesInputWithIcon from '~/components/HobbiesInputWithIcon';
import TextInputFieldWithIcon from '~/components/TextInputWithIcon';
import Button from '~/components/Button';
import getGlobalStyles from '~/helpers/GlobalStyles';
import getStyles from './UserForm.styles';
import Colors from '~/helpers/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {hobbiesAsString} from '~/assets/data/MOCK_DATA_HOBBIES';

const UserForm = ({onSubmitPress, profile, buttonTitle}) => {
  const [suggestedHobbies, setSuggestedHobbies] = useState([]);
  const styles = getStyles();
  const globalStyles = getGlobalStyles();

  useEffect(() => {
    setSuggestedHobbies(hobbiesAsString);
  }, []);

  const dateValidation = /([0-9]{4}-[0-9]{2}-[0-9]{2})/g;

  const ValidationSchema = Yup.object().shape(
    {
      firstName: Yup.string()
        .min(3, 'The name is too short!')
        .max(30, 'The name is too long!')
        .required('Required'),
      lastName: Yup.string()
        .min(3, 'The name is too short!')
        .max(30, 'The name is too long!')
        .nullable(),
      gender: Yup.string().nullable(),
      phoneNumber: Yup.string()
        .when('phoneNumber', {
          is: value => value?.length > 0,
          then: Yup.string().phone(
            RNLocalize.getCountry(),
            null,
            'Invalid Phone Number',
          ),
          otherwise: Yup.string(),
        })
        .nullable(),
      birthDate: Yup.string()
        .matches(dateValidation, 'Invalid date format')
        .nullable(),
      address: Yup.string().nullable(),
      email: Yup.string().email('Invalid email').nullable(),
      job: Yup.string().nullable(),
      quote: Yup.string().nullable(),
      hobbies: Yup.array().nullable(),
    },
    ['phoneNumber', 'phoneNumber'],
  );

  return (
    <Formik
      initialValues={{
        firstName: profile?.firstName ?? '',
        lastName: profile?.lastName ?? '',
        gender: profile?.gender ?? '',
        phoneNumber: profile?.phoneNumber ?? '',
        birthDate: profile?.birthDate ?? '',
        address: profile?.address ?? '',
        email: profile?.email ?? '',
        job: profile?.job ?? '',
        quote: profile?.quote ?? '',
        hobbies: profile?.hobbies ?? [],
      }}
      onSubmit={values => {
        console.log(
          JSON.stringify(
            {
              ...values,
              avatar:
                'https://cms.qz.com/wp-content/uploads/2018/06/h_01204239-e1528902368212.jpg?quality=75&strip=all&w=1200&h=630&crop=1',
              phoneNumber: values.phoneNumber.replace(/[()]/g, ''),
              birthDate: moment(values.birthDate).format('YYYY-MM-DD'),
            },
            0,
            2,
          ),
        );
        // onSubmitPress({
        //   ...values,
        //   avatar:
        //     'https://cms.qz.com/wp-content/uploads/2018/06/h_01204239-e1528902368212.jpg?quality=75&strip=all&w=1200&h=630&crop=1',
        //   phoneNumber: values.phoneNumber.replace(/[()]/g, ''),
        //   birthDate: moment(values.birthDate).format('YYYY-MM-DD'),
        // });
      }}
      validationSchema={ValidationSchema}
      validateOnChange={false}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        setFieldValue,
      }) => (
        <View
          style={[
            globalStyles.flex,
            styles.container,
            {backgroundColor: 'magenta '},
          ]}>
          <TextInputFieldWithIcon
            onChangeText={handleChange('firstName')}
            onBlur={handleBlur('firstName')}
            value={values.firstName}
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
            onChangeText={handleChange('lastName')}
            onBlur={handleBlur('lastName')}
            style={styles.textInput}
            value={values.lastName}
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
            onChangeText={handleChange('gender')}
            onBlur={handleBlur('gender')}
            style={styles.textInput}
            value={values.gender}
            title="Gender"
            placeholder="Any <3"
            icon={
              <MaterialCommunityIcons
                name="gender-non-binary"
                size={45}
                color={Colors.lavander}
                style={{marginLeft: -5}}
              />
            }
          />
          <DateInputWithIcon
            onChangeText={date => setFieldValue('birthDate', date)}
            onBlur={handleBlur('birthDate')}
            style={styles.textInput}
            value={values.birthDate}
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
            onChangeText={handleChange('phoneNumber')}
            onBlur={handleBlur('phoneNumber')}
            value={values.phoneNumber}
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
          {errors.phoneNumber && <Text>{errors.phoneNumber}</Text>}
          <TextInputFieldWithIcon
            onChangeText={handleChange('address')}
            onBlur={handleBlur('address')}
            style={styles.textInput}
            value={values.address}
            title="Address"
            placeholder="First Street"
            icon={
              <MaterialCommunityIcons
                name="home-map-marker"
                size={40}
                color={Colors.lavander}
                style={{marginLeft: -2}}
              />
            }
          />
          <TextInputFieldWithIcon
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            style={styles.textInput}
            value={values.email}
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
            suggestions={suggestedHobbies}
            hobbies={values.hobbies}
            onChangeHobbies={hobbies => {
              setFieldValue('hobbies', hobbies);
            }}
            onBlur={handleBlur('hobbies')}
            style={styles.textInput}
            title="Hobbies"
            placeholder="Playing guitar"
            icon={
              <Ionicons
                name="game-controller"
                size={35}
                color={Colors.lavander}
              />
            }
          />
          <TextInputFieldWithIcon
            onChangeText={handleChange('job')}
            onBlur={handleBlur('job')}
            style={styles.textInput}
            value={values.job}
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
            onChangeText={handleChange('quote')}
            onBlur={handleBlur('quote')}
            style={styles.textInput}
            value={values.quote}
            title="Favourite Quote"
            placeholder="Roses are red, violets are blue"
            icon={
              <Foundation
                name="quote"
                size={37.5}
                color={Colors.lavander}
                style={{marginLeft: 1}}
              />
            }
          />
          <Button
            onPress={handleSubmit}
            title={buttonTitle}
            containerStyle={{marginTop: 20, marginBottom: 30}}
          />
        </View>
      )}
    </Formik>
  );
};

export default UserForm;
