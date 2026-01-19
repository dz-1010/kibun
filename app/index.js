import { StyleSheet, SafeAreaView } from 'react-native';
import Header from '../src/components/Header';
import MoodTotal from '../src/components/MoodTotal';
import Calendar from '../src/components/Calendar';

export default function Index() {
 
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <MoodTotal />
      <Calendar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});