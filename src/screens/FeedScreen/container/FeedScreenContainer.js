import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getFeed} from '~/middlewares/users';
import PeopleList from '../screen';
import {useNavigation} from '@react-navigation/native';
import Routes from '~/helpers/Routes';
import {selectAllUsers} from '~/reducers/usersSlice';

const FeedScreenContainer = () => {
  const dispatch = useDispatch();
  const hasFeedError = useSelector(state => state.users.hasFeedError);
  const isFeedPending = useSelector(state => state.users.isFeedPending);
  const usersFeed = useSelector(selectAllUsers);
  const {navigate} = useNavigation();

  useEffect(() => {
    dispatch(getFeed());
  }, [dispatch]);

  const onTryAgainHandler = () => {
    dispatch(getFeed());
  };

  const onItemPress = id => {
    navigate(Routes.details, {id: id});
  };

  const onAddPress = () => {
    navigate(Routes.newProfile);
  };

  return (
    <PeopleList
      data={usersFeed}
      onItemPress={onItemPress}
      onAddPress={onAddPress}
    />
  );
};

export default FeedScreenContainer;
