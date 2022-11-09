import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Image from '~/components/Image';

const DetailsScreen = ({profile}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{width: 300, color: 'black'}}>
        Details Screen:
        {JSON.stringify(profile, 0, 2)}
      </Text>
    </View>
  );
};

export default DetailsScreen;
