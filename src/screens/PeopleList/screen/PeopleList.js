import React from 'react';
import {FlashList} from '@shopify/flash-list';
import PeopleItem from '~/components/PeopleItem';
import {getName} from '~/helpers/Functions';

const renderItem = ({item}, onPress) => {
  let avatarSource;
  const {avatar, first_name, last_name, quote, address} = item;
  if (avatar) {
    avatarSource = {uri: avatar};
  }
  return (
    <PeopleItem
      avatar={avatarSource}
      name={getName(first_name, last_name)}
      description={quote}
      address={address}
      onPress={onPress}
    />
  );
};

const PeopleList = ({data, onItemPress}) => {
  return (
    <FlashList
      data={data}
      keyExtractor={(item, index) => item.id}
      renderItem={item => renderItem(item, onItemPress)}
      estimatedItemSize={150}
    />
  );
};

export default PeopleList;
