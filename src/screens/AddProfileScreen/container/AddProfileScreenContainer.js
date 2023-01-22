import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AddProfileScreen from '../screen';
import {selectNewUser} from '~/reducers/usersSlice';
import {addUser} from '~/middlewares/users';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

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

  const onSubmitPress = profile => {
    dispatch(addUser({['id']: uuidv4(), ...profile}));
  };

  // const addedUser = useSelector(state => selectNewUser(state, profile));

  return <AddProfileScreen onSubmitPress={onSubmitPress} />;
};

export default AddProfileContainer;
