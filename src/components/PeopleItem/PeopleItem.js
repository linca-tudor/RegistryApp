import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import getGlobalStyles from '~/helpers/GlobalStyles';
import {getInitials} from '~/helpers/Functions';
import getStyles from './PeopleItem.styles';
import Avatar from '~/components/Avatar';
import Strings from '~/helpers/Strings';

const PeopleItem = ({avatar, name, description, address, onPress}) => {
  const styles = getStyles();
  const globalStyles = getGlobalStyles();

  const renderAvatar = () => {
    if (avatar) {
      return <Avatar avatar={avatar} />;
    } else {
      return <Avatar initials={name && getInitials(name)} />;
    }
  };

  return (
    <TouchableOpacity onPress={onPress} style={[styles.itemContainer]}>
      <View style={[globalStyles.flex, styles.textContainer]}>
        <Text
          numberOfLines={1}
          ellipsizeMode={'tail'}
          style={styles.primaryText}>
          {name ? name : Strings.itemTextDefaults.noName}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode={'tail'}
          style={styles.secondaryText}>
          {description ? description : Strings.itemTextDefaults.noDescription}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode={'tail'}
          style={styles.secondaryText}>
          {address ? address : Strings.itemTextDefaults.noAddress}
        </Text>
      </View>
      {renderAvatar()}
    </TouchableOpacity>
  );
};

export default PeopleItem;
