import React, {Component} from 'react';
import {View, Text} from 'react-native';
import AppStyles from '../styles';

// const styles = {
//   container: {
//     height: window.height,
//     backgroundColor: 'red',
//   }
// };

export default class StatScene extends Component {
  render() {
    return (
      <View style={AppStyles.tabSceneContainer}>
        <Text>
          State
        </Text>
      </View>
    );
  }
}
