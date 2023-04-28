import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import RoundedButton from '../../components/RoundedButton';

interface Props {
  readNFC: () => void;
}

const YesNFC = ({readNFC}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo-io.png')} />
      <Text style={styles.title}>Matrix</Text>
      <Text style={styles.title}>El NFC está disponible</Text>
      <RoundedButton onPress={readNFC} text="Leer NFC" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 500,
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
    color: 'white',
    marginVertical: 16,
  },
});

export default YesNFC;
