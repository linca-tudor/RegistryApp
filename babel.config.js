module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          test: './__tests__',
          underscore: 'lodash',
          '~': './src',
        },
      },
    ],
    ['react-native-reanimated/plugin'],
  ],
};
