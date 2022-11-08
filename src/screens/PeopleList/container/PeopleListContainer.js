import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUsers} from '~/actions/loadUsers';
import PeopleList from '../screen';
import {useNavigation} from '@react-navigation/native';
import Routes from '~/helpers/Routes';
import {selectAllUsers} from '~/reducers/usersSlice';

const PeopleListContainer = () => {
  const dispatch = useDispatch();
  const hasError = useSelector(state => state.users.hasError);
  const isLoading = useSelector(state => state.users.isLoading);
  const users = useSelector(selectAllUsers);
  const {navigate} = useNavigation();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const onTryAgainHandler = () => {
    dispatch(getUsers());
  };

  return (
    <PeopleList
      data={users}
      onItemPress={() => {
        navigate(Routes.details, {id: 'coaie'});
      }}
    />
  );
};

export default PeopleListContainer;
