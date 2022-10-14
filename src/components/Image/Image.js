import React from 'react';
import {Image as RNImage, View, VirtualizedList} from 'react-native';
import getStyles from './Image.styles';

const Image = ({source, size, width, height, borderRadius, style}) => {
  const styles = getStyles(size, width, height, borderRadius);
  return (
    <View>
      <RNImage source={source} style={[styles.image, style]} />
    </View>
  );
};

export default Image;
