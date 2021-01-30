import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Soon = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.soonText}>Próximamente</Text>
    </View>
  );
};

export default Soon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  soonText: {
    textAlign: 'center',
    fontSize: 26,
    fontFamily: 'Futura',
  },
});
