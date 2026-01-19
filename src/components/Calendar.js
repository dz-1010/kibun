import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Calendar as RNCalendar } from 'react-native-calendars';

export default function Calendar() {
  return (
    <RNCalendar
      style={styles.calendar}
      theme={{
        selectedDayBackgroundColor: '#f0f0f0',
        todayTextColor: '#00adf5',
        arrowColor: '#333',
      }}

    />
  );
}

const styles = StyleSheet.create({
  calendar: { paddingHorizontal: 10 }
});