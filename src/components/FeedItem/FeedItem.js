import React from 'react';
import {TouchableOpacity, Text, View, SafeAreaView} from 'react-native';
import getGlobalStyles from '~/helpers/GlobalStyles';
import {getInitials} from '~/helpers/Functions';
import getStyles from './FeedItem.styles';
import Avatar from '~/components/Avatar';
import Colors from '~/helpers/Colors';
import DashedLine from 'react-native-dashed-line';

const FeedItem = ({avatar, name, description, address, onPress}) => {
  const styles = getStyles();
  const globalStyles = getGlobalStyles();

  const renderAvatar = () => {
    return <Avatar avatar={avatar} initials={getInitials(name)} size={125} />;
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
          <DashedLine
            axis="horizontal"
            dashColor={Colors.cloud}
            dashThickness={2}
            dashGap={4}
            dashLength={3}
            dashStyle={{borderRadius: 2}}
          />
        </View>
        {renderAvatar()}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default FeedItem;
