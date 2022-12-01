import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import ProfileScreen from '../screen';
import {useDispatch, useSelector} from 'react-redux';
import {getUserById} from '~/middlewares/users';
import {selectUserById} from '~/reducers/usersSlice';

const ProfileScreenContainer = () => {
  const id = useRoute().params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserById(id));
  }, [id, dispatch]);

  const userProfile = useSelector(state => selectUserById(state, id));

  return (
    <ProfileScreen
      address={userProfile?.address}
      age={userProfile?.age}
      avatar={userProfile?.avatar}
      email={userProfile?.email}
      firstName={userProfile?.first_name}
      gender={userProfile?.gender}
      job={userProfile?.job}
      lastName={userProfile?.last_name}
      phoneNumber={userProfile?.phone_number}
      quote={userProfile?.quote}
      isLoading={userProfile?.isLoading ?? true}
    />
  );
};

export default ProfileScreenContainer;
