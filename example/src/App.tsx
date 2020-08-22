import * as React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f78c49',
    padding: 20,
  },
  card: {
    marginBottom: 10,
  },
  scroll: {
    marginBottom: 10,
    width: '100%',
  },
});
