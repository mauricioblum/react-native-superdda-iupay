import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card } from 'react-native-superdda-iupay';

export default function App() {
  return (
    <View style={styles.container}>
      <Card
        type="netflix"
        dueDate="Vencendo hoje, 19 JUL"
        isDue
        cnpj="32.773.0001/87"
        text="Tipo de Plano: Premium ULTRA HD"
        value={49.9}
        containerStyle={styles.card}
      />

      <Card
        type="lightBill"
        lightBillFlagStatus="yellow"
        dueDate="Quinta, 25 JUN"
        cnpj="131.344.523/0001-33"
        text="Bandeira Amarela"
        value={90.12}
        isPaid
      />
    </View>
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
});
