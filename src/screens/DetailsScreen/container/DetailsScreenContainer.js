import React, {useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import DetailsScreen from '../screen';
import {useDispatch, useSelector} from 'react-redux';
import store from '~/store/store';
import {getUserById} from '~/middlewares/users';
import {selectUserById} from '~/reducers/usersSlice';

const DetailsScreenContainer = () => {
  const id = useRoute().params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserById('550622dc-6c25-4d0e-a25c-6810ebb8c596'));
  }, [id, dispatch]);

  const userProfile = useSelector(state => selectUserById(state, id));

  return <DetailsScreen profile={userProfile} />;
};

export default DetailsScreenContainer;
