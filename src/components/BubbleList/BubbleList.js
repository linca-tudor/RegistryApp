import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import getStyles from './BubbleList.styles';
import getGlobalStyles from '~/helpers/GlobalStyles';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '~/helpers/Colors';

const BubbleList = ({items, onChangeItem}) => {
  const styles = getStyles();
  const globalStyles = getGlobalStyles();

  const removeItem = itemToRemoveIndex => {
    onChangeItem(items.filter((_, index) => index !== itemToRemoveIndex));
  };

  const Bubble = ({item, index}) => {
    return (
      <View key={index} style={styles.bubbleContainer}>
        <View style={styles.textContainer}>
          <Text numberOfLines={2} style={styles.text}>
            {item.name}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            removeItem(index);
          }}
          style={styles.crossIcon}>
          <Entypo
            name="circle-with-cross"
            size={15}
            color={Colors.ultramarineBlue}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {items.map((item, index) => {
        return <Bubble item={item} index={index} key={index} />;
      })}
    </View>
  );
};

export default BubbleList;
