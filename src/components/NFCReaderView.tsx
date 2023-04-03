import React from 'react';
import {View, Text, Button, NativeModules} from 'react-native';
import NFCReaderViewModel from '../models/NFCReaderViewModel';

interface NFCReaderViewProps {
  viewModel: NFCReaderViewModel;
}

const {NFCReaderManagerModule} = NativeModules;

const onPress = () => {
  NFCReaderManagerModule.readTag((response: any) => {
    console.log('Got response', response);
  });
};

const NewModuleButton = () => {
  return (
    <View>
      <Text>Lectura de NFC</Text>
      <Button title="Leer NFC" onPress={onPress} />
    </View>
  );
};

export default NewModuleButton;

//Got unknown argument class: GotNFCResponse
