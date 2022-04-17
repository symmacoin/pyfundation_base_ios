/**
 * @format
 */
import { AppRegistry, LogBox } from 'react-native';
import { name as appName } from './app.json';
import App from './src/app/App';
import './src/config';

// import './shim';

// Remove YellowBox on Debug application screen
LogBox.ignoreAllLogs(true);
AppRegistry.registerComponent(appName, () => App);
