import {StyleSheet} from 'react-native';

const getStyles = (size, thickness, color, orientation, borderRadius) => {
  var usedHeight = 0;
  var usedWidth = 0;

  if (orientation === 'vertical') {
    usedHeight = size;
    usedWidth = thickness;
  } else if (orientation === 'horizontal') {
    usedHeight = thickness;
    usedWidth = size;
  }
  return StyleSheet.create({
    divider: {
      height: usedHeight,
      width: usedWidth,
      backgroundColor: color,
      borderRadius: borderRadius,
    },
  });
};

export default getStyles;
