import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import RoundedButton from '../../components/RoundedButton';

interface Props {
  readNFC: () => void;
}

const NotNFC = ({readNFC}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo-io.png')} />
      <Text style={styles.title}>Matrix</Text>
      <Text style={styles.title}>No Tiene NFC</Text>
      <Text style={styles.subtitle}>Tu dispositivo no tiene NFC.</Text>
      <RoundedButton onPress={readNFC} text="Leer NFC" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '80%',
    width: '90%',
    borderRadius: 50,
    backgroundColor: '#5672C8',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    color: '#FFFFFF',
    marginVertical: 16,
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default NotNFC;
