import React, { Component } from 'react';
import PropTypes from 'prop-types' //consider using this!
import { StyleSheet, View, Button,
  TextInput, TouchableOpacity, Text, Keyboard, Alert } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Metrics, Colors } from '../Themes'

export default class StatsCalendar extends Component {

  constructor(props) {
    super(props);
  }

    render () {
    const navigate = this.props.navigate;

      return (
        <View style={styles.container}>

          <TouchableOpacity
            onPress={()=> navigate.navigate('ProfileScreen')}>
            <FontAwesome name="user"
              color='deepskyblue'
              size={30}/>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=> navigate.navigate('DisasterpieceNav')}>
            <FontAwesome name="home"
              color='deepskyblue'
              size={30}/>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=> navigate.navigate('GalleryScreen')}>
            <FontAwesome name="th-large"
              color='deepskyblue'
              size={30}/>
          </TouchableOpacity>

        </View>
        );
      }
}


const styles = StyleSheet.create({
      container: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
      }
});
