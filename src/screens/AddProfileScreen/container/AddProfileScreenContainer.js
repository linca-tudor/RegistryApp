import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AddProfileScreen from '../screen';

const AddProfileContainer = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [job, setJob] = useState('');

  return <AddProfileScreen />;
};

export default AddProfileContainer;
