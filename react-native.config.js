module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./assets/fonts/'],
  dependency: {
    platforms: {
      ios: {
        podspecPath: 'node_modules/react-native-vector-icons/RNVectorIcons.podspec',
      },
      android: {
        packageImportPath: 'import com.oblongmMedia.rnvectoricons.RNVectorIconsPackage;',
        packageInstance: 'new RNVectorIconsPackage()',
      },
    },
  },
};
