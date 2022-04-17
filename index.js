/**
 * @format
 */
import { AppRegistry, LogBox } from 'react-native';
import { name as appName } from './app.json';
import AppTemplate from './src/app/AppTemplate';
import './src/config';

// import { SYNC_CONFIG } from './src/sync.config';
// import './shim';
// const App = () => (SYNC_CONFIG.enabled ? <AppWrapperSync appId={SYNC_CONFIG.appId} /> : <App_Template />);

// Remove YellowBox on Debug application screen
LogBox.ignoreAllLogs(true);
AppRegistry.registerComponent(appName, () => AppTemplate);
