/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {FingerprintJsProProvider} from '@fingerprintjs/fingerprintjs-pro-react-native';

// AppRegistry.registerComponent(appName, () => App);

const WrappedApp = () => (
  <FingerprintJsProProvider apiKey={'Pfbi9WMjmva9U4gYYnlS'} region={'ap'}>
    <App />
  </FingerprintJsProProvider>
);

AppRegistry.registerComponent(appName, () => WrappedApp);
