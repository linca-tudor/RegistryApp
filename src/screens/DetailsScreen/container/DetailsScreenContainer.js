import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import DetailsScreen from '../screen';
import {useDispatch, useSelector} from 'react-redux';
import {getUserById} from '~/middlewares/users';
import {selectUserById} from '~/reducers/usersSlice';

const DetailsScreenContainer = () => {
  const id = useRoute().params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserById(id));
  }, [id, dispatch]);

  const userProfile = useSelector(state => selectUserById(state, id));

  const [isFirstTabActive, setIsFirstTabActive] = useState(true);
  // const userProfile = {
  //   isLoading: 'false',
  //   error: '',
  //   age: 85,
  //   email: 'cabbs2@t-online.de',
  //   phone_number: '+86 604 452 9490',
  //   avatar:
  //     'https://robohash.org/molestiasadipisciplaceat.png?size=125x125&set=set1',
  //   address: '251 Paget Crossing',
  //   quote: 'Compatible neutral migration',
  //   gender: 'Male',
  //   last_name: 'Abbs',
  //   first_name: 'Chrissy',
  //   job: 'GIS Technical Architect',
  //   id: '550622dc-6c25-4d0e-a25c-6810ebb8c596',
  // };

  if (userProfile) {
    console.log('In DetailScreenContainer userProfile is ', userProfile);
    if (userProfile.isLoading) {
      console.log(
        'In DetailsScreenContainer profile is loading, ${isLoading} is: ',
        userProfile.isLoading,
      );
    } else {
      console.log(
        'DetailsScreenContainer userProfile is: ',
        JSON.stringify(userProfile, 0, 2),
      );
    }
  }

  // if (userProfile && !userProfile.isLoading) {
  //   return <DetailsScreen profile={userProfile} />;
  // }

  // return (
  //   <DetailsScreen
  //     profile={userProfile}
  //     onButtonPress={setIsFirstTabActive}
  //     isFirstTabActive={isFirstTabActive}
  //   />
  // );
  return null;
};

export default DetailsScreenContainer;
