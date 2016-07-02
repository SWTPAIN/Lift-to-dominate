import { Dimensions, Platform } from 'react-native';

const window = Dimensions.get('window');
export const windowHeight = window.height;
export const windowWidth = window.width;

export const navbarHeight = Platform.OS === 'ios' ? 68 : 48;
export const navbarTitleMarginTop = Platform.OS === 'ios' ? ((68 - 28) / 2) : ((48 - 28) / 2);
export const tabBarHeight = 48;
export const sceneHeight = window.height - navbarHeight;
export const tabSceneHeight = sceneHeight - tabBarHeight;
// export const statusBarHeight = 22;

// Colors
export const white = '#EEEEEE';
export const darkGrey = '#101010';
export const normalGrey = '#202020';
