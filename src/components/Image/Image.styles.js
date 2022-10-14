import {StyleSheet} from 'react-native';

const getStyles = (size, width, height, borderRadius) => {
  let usedWidth = width;
  let usedHeight = height;
  if (size) {
    usedWidth = size;
    usedHeight = size;
  }
  return StyleSheet.create({
    image: {
      width: usedWidth,
      height: usedHeight,
      borderRadius: borderRadius,
    },
  });
};

export default getStyles;
