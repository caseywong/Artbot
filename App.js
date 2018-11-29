import React from 'react';
import { AsyncStorage, StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Images, Colors, Metrics } from './App/Themes'

import HomeScreen from './App/Screens/HomeScreen.js'
import DisasterpieceNav from './App/Screens/Disasterpiece/DisasterpieceNav.js'
import ProfileScreen from './App/Screens/ProfileScreen.js'
import GalleryScreen from './App/Screens/GalleryScreen.js'
import ArtbotNavigator from './App/Components/ArtbotNavigator.js'
import SessionSettingsScreen from './App/Screens/Disasterpiece/SessionSettingsScreen.js'

const TabNav = createBottomTabNavigator({
  ProfileScreen: {screen: ProfileScreen},
  DisasterpieceNav: {screen: DisasterpieceNav},
  GalleryScreen: {screen: GalleryScreen},
}, {
  initialRouteName: 'DisasterpieceNav',
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
