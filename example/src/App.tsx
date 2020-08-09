import * as React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Card } from 'react-native-superdda-iupay';

export default function App() {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Card
          type="netflix"
          dueDate={new Date()}
          isDue
          cnpj="32.773.0001/87"
          text="Tipo de Plano: Premium ULTRA HD"
          value={49.9}
          containerStyle={styles.card}
        />

        <Card
          type="lightBill"
          lightBillFlagStatus="yellow"
          dueDate={new Date()}
          cnpj="131.344.523/0001-33"
          text="Bandeira Amarela"
          value={90.12}
          isPaid
        />
      </View>
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
