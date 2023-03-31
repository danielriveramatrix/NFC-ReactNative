import React from 'react';
import {View, Text, Button} from 'react-native';
import {observer} from 'mobx-react';
import NFCReaderViewModel from '../models/NFCReaderViewModel';

interface NFCReaderViewProps {
  viewModel: NFCReaderViewModel;
}

const NFCReaderView: React.FC<NFCReaderViewProps> = observer(({viewModel}) => {
  return (
    <View>
      <Text>Lectura de NFC</Text>
      <Button title="Leer NFC" onPress={() => viewModel.startNFCReading()} />
      {viewModel.nfcData !== '' && <Text>{viewModel.nfcData}</Text>}
    </View>
  );
});

export default NFCReaderView;
