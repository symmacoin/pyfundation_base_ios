module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.ios.jsx', '.android.jsx', '.js', '.jsx', '.json', '.ts', '.tsx'],
        root: ['.'],
        alias: {
          '@api': './src/api',
          '@app': './src/app',
          '@assets': './src/assets',
          '@components': './src/components',
          '@config': './src/config',
          '@database': './src/database',
          '@dtos': './src/dtos',
          '@hooks': './src/hooks',
          '@i18n': './src/i18n',
          '@routes': './src/routes',
          '@services': './src/services',
          '@scenes': './src/scenes',
          '@screens': './src/screens',
          '@stores': './src/stores',
          '@theme': './src/theme',
          '@type': './src/type',
          '@utils': './src/utils',
          '@env': './src/env.js',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
