const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Remove web platform entirely
config.resolver.platforms = ['ios', 'android'];

// Disable web-specific resolver
config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,
  'react-native-web': null,
};

module.exports = config;