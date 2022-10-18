import React from 'react';
import {FlashList} from '@shopify/flash-list';
import PeopleItem from '~/components/PeopleItem';
import {getName} from '~/helpers/Functions';
import Strings from '~/helpers/Strings';

const renderItem = ({item}, onPress) => {
  const {avatar, first_name, last_name, quote, address} = item;
  let name = getName(first_name, last_name);

  return (
    <PeopleItem
      avatar={avatar}
      name={name ?? Strings.itemTextDefaults.noName}
      description={quote ?? Strings.itemTextDefaults.noDescription}
      address={address ?? Strings.itemTextDefaults.noAddress}
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
