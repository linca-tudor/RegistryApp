import React from 'react';
import {FlashList} from '@shopify/flash-list';
import getGlobalStyles from '~/helpers/GlobalStyles';
import getStyles from './PeopleList.styles';
import PeopleItem from '~/components/PeopleItem';

const renderItem = ({item}) => {
  let avatarSource;
  const {avatar, first_name, last_name, quote, address, gender} = item;
  if (avatar) {
    avatarSource = {uri: avatar};
  }
  return (
    <PeopleItem
      avatar={avatarSource}
      firstName={first_name}
      lastName={last_name}
      gender={gender}
      quote={quote}
      address={address}
    />
  );
};

const PeopleList = () => {
  const styles = getStyles();
  const generalStyles = getGlobalStyles();
  const data = require('~/assets/data/MOCK_DATA.json');

  return (
    <FlashList
      data={data}
      keyExtractor={(item, index) => item.id}
      renderItem={renderItem}
      estimatedItemSize={150}
    />
  );
};

export default PeopleList;
