import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MOODS = ['😆', '😭', '😡', '🫩', '😌'];

export default function MoodTotal({ stats }) {
  return (
    <View style={styles.statsRow}>
      {MOODS.map((m) => (
        <View key={m} style={styles.statBox}>
          <Text style={styles.statEmoji}>{m}</Text>
          <Text style={styles.statCount}>{stats[m] || 0}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  statsRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    paddingVertical: 15, 
    marginHorizontal: 20,
    backgroundColor: '#f8f9fa',
    borderRadius: 15,
    marginBottom: 10
  },
  statBox: { alignItems: 'center' },
  statEmoji: { fontSize: 18, marginBottom: 4 },
  statCount: { fontSize: 14, fontWeight: 'bold', color: '#666' },
});