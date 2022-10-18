import React from 'react';
import PeopleList from '../screen';

const PeopleListContainer = () => {
  const data = require('~/assets/data/MOCK_DATA.json');

  return (
    <PeopleList
      data={data}
      onItemPress={() => {
        console.log('The item has been pressed!');
      }}
    />
  );
};

export default PeopleListContainer;
