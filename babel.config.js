module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [   
    ['module-resolver', {
      root: ['./src',],
      'alias': {        
        'assets': './src/assets',
        'components': './src/components',
        'routes': './src/routes',
        'screens': './src/screens',
        'services': './src/services',
        'store': './src/store',
        'types': './src/types',
        'utils': './src/utils'
      }
    }],
    ['module:react-native-dotenv', {
      'moduleName': 'react-native-dotenv',
      'path': '.env',
      'blacklist': null,
      'whitelist': null,
      'safe': false,
      'allowUndefined': true
    }]
  ],
};
