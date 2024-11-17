/**
 * @format
 */

import { initializeCore } from 'core';
import { AppRegistry } from 'react-native';
import Config from 'react-native-config';
import { name as appName } from './app.json';
import App from './src/App';

console.log('aqui', Config.API_URL);

initializeCore({
  apiUrl: Config.API_URL,
});

AppRegistry.registerComponent(appName, () => App);
