import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface Props {
  onPress: () => void;
  text: string;
  disabled?: boolean;
}

const RoundedButton = ({onPress, text, disabled = false}: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: disabled ? '#CCCCCC' : '#000000',
        },
      ]}
      disabled={disabled}
      onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000000',
    borderRadius: 50,
    padding: 16,
    width: '50%',
    marginTop: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
});

export default RoundedButton;
