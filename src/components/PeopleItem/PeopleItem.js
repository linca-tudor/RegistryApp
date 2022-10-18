import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import getGlobalStyles from '~/helpers/GlobalStyles';
import {getInitials} from '~/helpers/Functions';
import getStyles from './PeopleItem.styles';
import Avatar from '~/components/Avatar';

const PeopleItem = ({avatar, name, description, address, onPress}) => {
  const styles = getStyles();
  const globalStyles = getGlobalStyles();

  const renderAvatar = () => {
    return <Avatar avatar={avatar} initials={getInitials(name)} />;
  };

  return (
    <TouchableOpacity onPress={onPress} style={[styles.itemContainer]}>
      <View style={[globalStyles.flex, styles.textContainer]}>
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
      {renderAvatar()}
    </TouchableOpacity>
  );
};

export default PeopleItem;
