const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  resolver: {
    assetExts: ['pdf', 'png', 'jpg', 'jpeg', 'gif', 'svg', 'ttf', 'otf'],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
