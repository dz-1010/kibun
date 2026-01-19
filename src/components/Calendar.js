import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Calendar as RNCalendar } from 'react-native-calendars';

export default function Calendar({ diaries, onSelectDate, onMonthChange }) {
  const todayDateString = new Date().toISOString().split('T')[0];

  return (
    <RNCalendar
      style={styles.calendar}
      theme={{
        arrowColor: '#333',
        monthTextColor: '#333',
        textMonthFontWeight: 'bold',
      }}
      onMonthChange={(month) => onMonthChange(month.dateString.substring(0, 7))}
      dayComponent={({ date, state }) => {
        const mood = diaries[date.dateString];
        const isToday = date.dateString === todayDateString; // 오늘인지 확인

        return (
          <TouchableOpacity
            style={styles.dayCell}
            onPress={() => onSelectDate(date.dateString)}
          >
            <Text 
              style={[
                styles.dayText, 
                state === 'disabled' && { color: '#ccc' },
                isToday && styles.todayText
              ]}
            >
              {date.day}
            </Text>
            {mood ? (
              <Text style={styles.moodInCalendar}>{mood}</Text>
            ) : (
              <View style={{ height: 24 }} />
            )}
          </TouchableOpacity>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  calendar: { paddingHorizontal: 10 },
  dayCell: { alignItems: 'center', justifyContent: 'center', width: 45, height: 60 },
  dayText: { fontSize: 12, color: '#999', marginBottom: 4 },
  todayText: { 
    color: '#00adf5', 
    fontWeight: 'bold',
  },
  moodInCalendar: { fontSize: 22 },
});