import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {getName} from '~/helpers/Functions';
import FeedItem from '~/components/FeedItem';
import Strings from '~/helpers/Strings';
import getStyles from './FeedScreen.styles';
import getGlobalStyles from '~/helpers/GlobalStyles';

const renderItem = ({item}, onPress) => {
  const {avatar, firstName, lastName, quote, address} = item;
  let name = getName(firstName, lastName);

  return (
    <FeedItem
      avatar={avatar}
      name={name}
      description={quote ?? Strings.feedScreen.placeholders.noDescription}
      address={address ?? Strings.feedScreen.placeholders.noAddress}
      onPress={onPress}
    />
  );
};

const FeedFooter = () => {
  const styles = getStyles();

  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>{Strings.feedScreen.footerText}</Text>
    </View>
  );
};

const FeedScreen = ({data, onItemPress}) => {
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
        ListFooterComponent={FeedFooter}
      />
    </SafeAreaView>
  );
};

export default FeedScreen;
