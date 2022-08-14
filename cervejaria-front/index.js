/**
 * @format
 */

 import {AppRegistry} from 'react-native';
 import App from './src/App';
 import Mapa from './src/components/Mapa';
 import {name as appName} from './app.json';
 import Drawer from './src/navigation/Drawer'
 
 AppRegistry.registerComponent(appName, () => Mapa);