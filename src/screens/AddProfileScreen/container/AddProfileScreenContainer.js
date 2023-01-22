import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AddProfileScreen from '../screen';
import {selectNewUser} from '~/reducers/usersSlice';
import {addUser} from '~/middlewares/users';

const AddProfileContainer = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [job, setJob] = useState('');

  const dispatch = useDispatch();

  const profile = {
    id: '6eda2c76-6a85-438c-9f4a-4e4613c604fd',
    avatar: 'https://robohash.org/doloremquevelvel.png?size=125x125&set=set1',
    firstName: '',
    lastName: 'Postance',
    email: 'lpostance36@posterous.com',
    gender: 'Female',
    quote: 'Phased 4th generation migration',
    address: '7400 Sauthoff Place',
    phoneNumber: '734 239 5515',
    birthDate: '1945-09-14',
    job: 'Dental Hygienist',
  };

  const onSubmitPress = () => {
    dispatch(addUser(profile));
  };

  // const addedUser = useSelector(state => selectNewUser(state, profile));

  return <AddProfileScreen onSubmitPress={onSubmitPress} />;
};

export default AddProfileContainer;
