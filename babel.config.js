module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [   
    ['module-resolver', {
      root: ['./src',],
      'alias': {        
        'components': './src/components',
        'routes': './src/routes',
        'screens': './src/screens',
        'utils': './src/utils'
      }
    }],
  ],
};
