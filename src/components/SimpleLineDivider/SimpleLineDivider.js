import React from 'react';
import {View} from 'react-native';
import getStyles from './SimpleLineDivider.styles';

const SimpleLineDivider = ({
  thickness,
  color,
  orientation,
  borderRadius,
  style,
  margin,
}) => {
  const styles = getStyles(thickness, color, orientation, borderRadius, margin);

  return <View style={[styles.divider, style]} />;
};

export default SimpleLineDivider;
