import React, {Component} from 'react';
import { Scene, Router } from 'react-native-router-flux';
import RoutinesScene from './RoutinesScene';
import StatScene from './StatScene';
import { TabIcon } from '../components';
// import Home from './Home';

export default class App extends Component {

  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={false}>
          <Scene
            initial
            key="mainScene"
            type="replace"
            tabs
            default="home"
            hideNavBar
          >
            <Scene
              initial
              key="routinesScene"
              component={RoutinesScene}
              icon={TabIcon}
              title="Routine"
            />
            <Scene
              key="statScene"
              title="Stat"
              icon={TabIcon}
              component={StatScene}
            />
          </Scene>
        </Scene>
      </Router>
    );
  }
}
