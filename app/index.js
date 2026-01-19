import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView } from 'react-native';
import Header from '../src/components/Header';
import MoodTotal from '../src/components/MoodTotal';
import Calendar from '../src/components/Calendar';
import MoodPickModal from '../src/components/MoodPickModal';
import { loadDiaries, saveDiaryEntry } from '../src/utils/storage';
import { getStatsByMonth } from '../src/utils/total';

export default function Index() {
  const [diaries, setDiaries] = useState({});
  const [selectedDate, setSelectedDate] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().toISOString().split('T')[0].substring(0.7))

  useEffect(() => {
    const init = async() => {
      const data = await loadDiaries();
      setDiaries(data);
    };
    init();
  }, []);

  const handleSelectMood = async (mood) => {
    const updatedDiaries = await saveDiaryEntry(diaries, selectedDate, mood);
    setDiaries(updatedDiaries);
    setModalVisible(false);
  };

  const stats = getStatsByMonth(diaries, currentMonth);
 
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <MoodTotal stats={stats}/>
      <Calendar 
        diaries = {diaries}
        onSelectDate = {(date) => {
          setSelectedDate(date);
          setModalVisible(true);
        }}
        onMonthChange={setCurrentMonth}
      />
      <MoodPickModal
        visible={modalVisible}
        date={selectedDate}
        onClose={() => setModalVisible(false)}
        onSelectMood={handleSelectMood}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});