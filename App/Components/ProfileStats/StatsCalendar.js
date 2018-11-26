import React, { Component } from 'react';
import PropTypes from 'prop-types' //consider using this!
import { StyleSheet, View, Button,
  TextInput, TouchableOpacity, Text, Keyboard, Alert } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Metrics, Colors } from '../../Themes'
import { Calendar } from 'react-native-calendars';
  //Calendar Component Documentation: https://github.com/wix/react-native-calendars


export default class StatsCalendar extends Component {

  state = {
    validEntries: { //Manipulate this variable based on User entries
      //Top one will be the current date that is selected
      //Those with valid entries will be marked with dotColor
      '2018-11-08': {selected: true, selectedColor: 'deepskyblue' }
    },
  }

  render () {

    return (
      <View style={styles.container}>
        <Calendar
          minDate={'2018-10-01'} //This will be the user's membership membership date
          maxDate={'2018-11-30'} //This will be the last day of the month
          onDayPress={(day) => {Alert.alert('selected day')}}
            //Here check if the day has a disasterpiece, if so display it
            //Use react native modals to display the artwork
          markedDates={this.state.validEntries}
        />
      </View>
      );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'space-between'
    }
  });
