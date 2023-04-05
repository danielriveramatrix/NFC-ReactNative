import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RoundedButton from '../../components/RoundedButton';

interface Props {
  data: string;
}

const ShowNFC = ({data}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BCP App</Text>
      <Text style={styles.subtitle}>{data}</Text>

      <View
        style={{
          height: '20%',
          width: '100%',
          position: 'absolute',
          borderBottomEndRadius: 50,
          borderBottomLeftRadius: 50,
          bottom: 0,
          backgroundColor: '#5AB0C4',
        }}>
        <View
          style={{
            height: '50%',
            width: '100%',
            position: 'absolute',
            borderBottomEndRadius: 50,
            borderBottomLeftRadius: 50,
            bottom: 0,
            backgroundColor: '#000000',
          }}></View>
      </View>
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
  },
});

export default ShowNFC;
