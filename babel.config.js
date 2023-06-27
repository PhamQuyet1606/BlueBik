module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.js', '.ios.js', '.android.js'],
        alias: {
          // 'src': './src',
          assets: './src/assets',
          navigation: './src/navigation',
          modules: './src/modules',
          components: './src/components',
        },
      },
    ],
  ],
}
