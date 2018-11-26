import React from 'react';
import { AsyncStorage, StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Images, Colors, Metrics } from './App/Themes'

import HomeScreen from './App/Screens/HomeScreen.js'
import ProfileScreen from './App/Screens/ProfileScreen.js'
import GalleryScreen from './App/Screens/GalleryScreen.js'
import ArtbotNavigator from './App/Components/ArtbotNavigator.js'
import SessionSettings from './App/Screens/Disasterpiece/SessionSettings.js'

const TabNav = createBottomTabNavigator({
  ProfileScreen: {screen: ProfileScreen},
  HomeScreen: {screen: HomeScreen},
  GalleryScreen: {screen: GalleryScreen},
}, {
  initialRouteName: 'HomeScreen',
  tabBarComponent: ({navigation}) => <ArtbotNavigator navigate={navigation} />,
  tabBarOptions: {
    activeTintColor: 'gray'
  }
});

export default class App extends React.Component {

  render() {
      return (
        <View style={styles.container}>
          <TabNav navigation={this.props.navigation}/>
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
