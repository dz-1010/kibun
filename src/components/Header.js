import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>kibun</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { padding: 20, alignItems: 'center' },
  logo: { fontSize: 32, fontWeight: '900', color: '#333', letterSpacing: -1 },
});