import React, {useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import ProfileScreen from '../screen';
import {useDispatch, useSelector} from 'react-redux';
import Routes from '~/helpers/Routes';
import {getUserById} from '~/middlewares/users';
import {selectUserById} from '~/reducers/usersSlice';

const ProfileScreenContainer = () => {
  const id = useRoute().params.id;
  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById(id));
  }, [id, dispatch]);

  const userProfile = useSelector(state => selectUserById(state, id));

  const onEditPress = () => {
    navigate(Routes.editProfile, {id: userProfile?.id});
  };

  return (
    <ProfileScreen
      address={userProfile?.address}
      age={userProfile?.age}
      avatar={userProfile?.avatar}
      email={userProfile?.email}
      firstName={userProfile?.firstName}
      gender={userProfile?.gender}
      job={userProfile?.job}
      lastName={userProfile?.lastName}
      phoneNumber={userProfile?.phoneNumber}
      quote={userProfile?.quote}
      isPending={userProfile?.isPending ?? true}
      onEditPress={onEditPress}
    />
  );
};

export default ProfileScreenContainer;
