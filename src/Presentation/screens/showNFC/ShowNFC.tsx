import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import RoundedButton from '../../components/RoundedButton';

interface Props {
  data: string;
  readNFC: () => void;
}

const ShowNFC = ({data, readNFC}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo-io.png')} />
      <Text style={styles.title}>Matrix</Text>
      <Text style={styles.title}>BCP APP</Text>
      <Text style={styles.subtitle}>
        El NFC contiene la siguiente información:
      </Text>
      <Text style={styles.subtitle}>{data}</Text>
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
    marginVertical: 16,
    color: 'white',
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    paddingHorizontal: 1,
  },
});

export default ShowNFC;
