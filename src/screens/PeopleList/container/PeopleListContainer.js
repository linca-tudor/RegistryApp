import React from 'react';
import PeopleList from '../screen';
import {useNavigation} from '@react-navigation/native';
import Routes from '~/helpers/Routes';

const PeopleListContainer = () => {
  const data = require('~/assets/data/MOCK_DATA.json');
  const {navigate} = useNavigation();

  return (
    <PeopleList
      data={data}
      onItemPress={() => {
        navigate(Routes.details, {id: 'coaie'});
      }}
    />
  );
};

export default PeopleListContainer;
