import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {getName} from '~/helpers/Functions';
import FeedItem from '~/components/FeedItem';
import Strings from '~/helpers/Strings';
import getStyles from './Feed.styles';
import getGlobalStyles from '~/helpers/GlobalStyles';

const renderItem = ({item}, onPress) => {
  const {avatar, firstName, lastName, quote, address} = item;
  let name = getName(firstName, lastName);

  return (
    <FeedItem
      avatar={avatar}
      name={name ?? Strings.itemTextDefaults.noName}
      description={quote ?? Strings.itemTextDefaults.noDescription}
      address={address ?? Strings.itemTextDefaults.noAddress}
      onPress={onPress}
    />
  );
};

const Feed = ({data, onItemPress}) => {
  const styles = getStyles();
  const globalStyles = getGlobalStyles();
  return (
    <SafeAreaView style={[globalStyles.flex, styles.container]}>
      <FlashList
        data={data}
        keyExtractor={item => item.id}
        renderItem={item =>
          renderItem(item, () => {
            onItemPress(item.item.id);
          })
        }
        estimatedItemSize={150}
      />
    </SafeAreaView>
  );
};

export default Feed;
