import React from 'react';
import Lottie from 'lottie-react-native';

export default function ControllingAnimationProgress() {
  return (
    <Lottie
      source={require('../../assets/nfc_enabled.json')}
      autoPlay
      loop={true}
    />
  );
}
