import {StyleSheet} from 'react-native';

const getStyles = (size, width, height) => {
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
    },
  });
};

export default getStyles;
