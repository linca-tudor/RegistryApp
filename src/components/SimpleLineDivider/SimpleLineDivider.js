import React from 'react';
import {View} from 'react-native';
import getStyles from './SimpleLineDivider.styles';

const SimpleLineDivider = ({
  size,
  thickness,
  color,
  orientation,
  borderRadius,
  style,
}) => {
  const styles = getStyles(size, thickness, color, orientation, borderRadius);

  return <View style={[styles.divider, style]} />;
};

export default SimpleLineDivider;
