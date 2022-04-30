module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          _redux: './src/redux',
          _assets: './src/assets',
          _components: './src/components',
          _navigation: './src/navigation',
          _screens: './src/screens',
          _theme: './src/theme',
          _helpers: './src/helpers',
        },
      },
    ],
  ],
};
