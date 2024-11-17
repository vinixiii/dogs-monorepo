const {
  getMetroTools,
  getMetroAndroidAssetsResolutionFix,
} = require('react-native-monorepo-tools');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const monorepoMetroTools = getMetroTools();
const androidAssetsResolutionFix = getMetroAndroidAssetsResolutionFix();
const defaultConfig = getDefaultConfig(__dirname);
const {
  resolver: {sourceExts, assetExts},
} = defaultConfig;

const config = {
  transformer: {
    publicPath: androidAssetsResolutionFix.publicPath,
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  server: {
    enhanceMiddleware: middleware => {
      return androidAssetsResolutionFix.applyMiddleware(middleware);
    },
  },
  watchFolders: monorepoMetroTools.watchFolders,
  resolver: {
    extraNodeModules: monorepoMetroTools.extraNodeModules,
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  },
};

module.exports = mergeConfig(defaultConfig, config);
