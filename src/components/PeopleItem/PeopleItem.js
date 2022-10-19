import React from 'react';
import {TouchableOpacity, Text, View, SafeAreaView} from 'react-native';
import getGlobalStyles from '~/helpers/GlobalStyles';
import {getInitials} from '~/helpers/Functions';
import getStyles from './PeopleItem.styles';
import Avatar from '~/components/Avatar';
import {Dimensions} from 'react-native';

const PeopleItem = ({avatar, name, description, address, onPress}) => {
  const styles = getStyles();
  const globalStyles = getGlobalStyles();

  const renderAvatar = () => {
    return <Avatar avatar={avatar} initials={getInitials(name)} />;
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={onPress} style={[styles.itemContainer]}>
        <View style={[globalStyles.flex, styles.textDividerContainer]}>
          <View style={styles.textContainer}>
            <Text
              numberOfLines={1}
              ellipsizeMode={'tail'}
              style={styles.primaryText}>
              {name}
            </Text>
            <Text
              numberOfLines={1}
              ellipsizeMode={'tail'}
              style={styles.secondaryText}>
              {description}
            </Text>
            <Text
              numberOfLines={1}
              ellipsizeMode={'tail'}
              style={styles.secondaryText}>
              {address}
            </Text>
          </View>
          <View style={styles.itemDivider} />
        </View>
        {renderAvatar()}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PeopleItem;
