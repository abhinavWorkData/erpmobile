import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import NetworkService from './src/network/network.service';

NetworkService.setupInterceptors();

AppRegistry.registerComponent(appName, () => App);
