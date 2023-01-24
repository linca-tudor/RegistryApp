import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import getStyles from './BubbleList.styles';
import getGlobalStyles from '~/helpers/GlobalStyles';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '~/helpers/Colors';

const BubbleList = ({items}) => {
  const styles = getStyles();
  const globalStyles = getGlobalStyles();

  const Bubble = ({item, index}) => {
    return (
      <View>
        <Text>{item.name}</Text>
        <TouchableOpacity
          onPress={() => {
            console.log(`Cross pressed on item no. ${index}`);
          }}
          style={globalStyles.formItem.crossIcon}>
          <Entypo
            name="circle-with-cross"
            size={24}
            color={Colors.ultramarineBlue}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      {items.map((item, index) => {
        return <Bubble item={item} index={index} />;
      })}
    </View>
  );
};

export default BubbleList;
