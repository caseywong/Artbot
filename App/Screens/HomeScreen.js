import React from 'react';
import { StyleSheet, Text, View, Image,
  Button, TouchableOpacity, Alert, Dimensions,
  AsyncStorage} from 'react-native';

import { FontAwesome } from '@expo/vector-icons'
import { Images, Colors, Metrics } from '../Themes'
import SessionSettings from '../Screens/Disasterpiece/SessionSettings.js'

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image style={styles.logo}
              source={Images.logo}
              resizeMode='contain'/>
        </View>
        <View style={styles.userMessage}>
              <Text style={styles.welcomeMessage}> Welcome to ArtBot! </Text>
              <Text style={styles.continueMessage}> What would you like to do today? </Text>
        </View>
        <View style={styles.control}>
          <TouchableOpacity style={styles.controlButtonWrapper}
            onPress={()=> Alert.alert("To Session Settings")}>
            <Text style={styles.continueMessage}> Start a New Canvas </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.controlButtonWrapper}
            onPress={()=> Alert.alert('Upload Artwork')}>
            <Text style={styles.continueMessage}> Upload Artwork </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.controlButtonWrapper}
            onPress={()=> Alert.alert('Check in!')}>
            <Text style={styles.continueMessage}> Check in! </Text>
          </TouchableOpacity>
        </View>

      </View>
    );

  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.snow
  },
  imageContainer: {
    flex: 0.75,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 0.65 * SCREEN_WIDTH,
  },
  userMessage: {
    flex: 0.15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcomeMessage: {
    backgroundColor: 'deepskyblue',
    marginTop: 10,
    fontSize: 30,
    fontWeight: 'bold'
  },
  continueMessage: {
    marginTop: 5,
    fontSize: 20,
    fontStyle: 'italic'
  },
  control: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 25,
    marginBottom: 25
  },
  controlButtonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 0.65 * SCREEN_WIDTH,
    height: 50,
    backgroundColor: 'deepskyblue',
    borderRadius: 25
  },
});
