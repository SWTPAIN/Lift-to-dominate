import React, {Component} from 'react';
import {View, Text} from 'react-native';
import AppStyles from '../styles';

export default class RoutinesScene extends Component {
  render() {
    return (
      <View style={AppStyles.tabSceneContainer}>
        <Text>
          Routine
        </Text>
      </View>
    );
  }
}
