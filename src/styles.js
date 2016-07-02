import { StyleSheet } from 'react-native';
// App Globals
import * as AppConfig from './config';

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#000',
  },
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: AppConfig.white,
    height: AppConfig.sceneHeight,
    width: AppConfig.windowWidth,
    paddingTop: AppConfig.navbarHeight
  },
  tabSceneContainer: {
    position: 'relative',
    backgroundColor: AppConfig.white,
    height: AppConfig.sceneHeight - AppConfig.tabBarHeight,
    width: AppConfig.windowWidth,
    marginTop: AppConfig.navbarHeight,
  },
});

export default styles;
