module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin',
      ['module:react-native-dotenv'],
      [
        'module-resolver',
        {
          alias: {
            '@app/blueprints': './blueprints',
            '@src/assets': './src/assets',
            '@src/components': './src/components',
            '@src/constants': './src/constants',
            '@src/context': './src/context',
            '@src/hooks': './src/hooks',
            '@src/i18n': './src/i18n',
            '@src/screens': './src/screens',
            '@src/services': './src/services',
            '@src/store': './src/store',
            '@src/utils': './src/utils',
          },
          extensions: ['.js', '.json'],
          root: ['./src'],
        },
      ],
    ],
    presets: ['babel-preset-expo', '@babel/preset-typescript'],
  };
};
