import React from 'react';
import { AsyncStorage, StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Images, Colors, Metrics } from '../../Themes'

import SessionSettingsScreen from '../Disasterpiece/SessionSettingsScreen.js'
import BlankCanvasScreen from '../Disasterpiece/BlankCanvasScreen.js'
import UploadArtworkScreen from '../Disasterpiece/UploadArtworkScreen.js'
import ChatbotScreen from '../Disasterpiece/ChatbotScreen.js'
import HomeScreen from '../../Screens/HomeScreen.js'


const StackNav = createStackNavigator({
  HomeScreen: {screen: HomeScreen},
  SessionSettingsScreen: {screen: SessionSettingsScreen},
  BlankCanvasScreen: {screen: BlankCanvasScreen},
  UploadArtworkScreen: {screen: UploadArtworkScreen},
  ChatbotScreen: { screen: ChatbotScreen}
}, {
  initialRouteName: 'HomeScreen',
});

export default class DisasterpieceNav extends React.Component {


  render() {
      return (
        <View style={styles.container}>
          <StackNav />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
