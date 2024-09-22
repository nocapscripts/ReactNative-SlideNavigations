import { Text, StyleSheet, View } from 'react-native';
import React from 'react';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.textarea}>
            See on proovi app navigatsioonile
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textarea: {
    height: 150,
    width: 300,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    textAlignVertical: 'top', 
    textAlign: 'center',
    fontSize: 16
  },
});
