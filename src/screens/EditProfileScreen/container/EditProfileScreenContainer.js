import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import EditProfileScreen from '../screen';
import {selectUserById} from '~/reducers/usersSlice';
import {editUser} from '~/middlewares/users';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

const EditProfileContainer = () => {
  const dispatch = useDispatch();
  const id = useRoute().params.id;

  const userProfile = useSelector(state => selectUserById(state, id));

  const onSubmitPress = profile => {
    dispatch(editUser({['id']: id, ...profile}));
  };

  return (
    <EditProfileScreen onSubmitPress={onSubmitPress} profile={userProfile} />
  );
};

export default EditProfileContainer;
