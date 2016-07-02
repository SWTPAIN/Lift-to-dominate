import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './configureStore';

const store = configureStore();

const liftToDominate = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('liftToDominate', () => liftToDominate);
