import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NotNFC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No Tiene NFC</Text>
      <Text style={styles.subtitle}>Tu dispositivo no tiene NFC.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '80%',
    width: '90%',
    borderRadius: 50,
    backgroundColor: '#00529B',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
    marginVertical: 16,
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
});

export default NotNFC;
