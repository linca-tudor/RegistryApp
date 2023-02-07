import {StyleSheet} from 'react-native';

const getStyles = (thickness, color, orientation, borderRadius, margin) => {
  var height = 0;
  var width = 0;
  var marginVertical = 0;
  var marginHorizontal = 0;

  if (orientation === 'vertical') {
    height = undefined;
    width = thickness;
    marginVertical = margin;
    marginHorizontal = undefined;
  } else if (orientation === 'horizontal') {
    height = thickness;
    width = undefined;
    marginVertical = undefined;
    marginHorizontal = margin;
  }
  return StyleSheet.create({
    divider: {
      height: height,
      width: width,
      backgroundColor: color,
      borderRadius: borderRadius,
      marginVertical: marginVertical,
      marginHorizontal: marginHorizontal,
      flex: 1,
    },
  });
};

export default getStyles;
