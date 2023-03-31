import React from 'react';
import {View, Text, Button} from 'react-native';
import {observer} from 'mobx-react';
import NFCReaderViewModel from '../models/NFCReaderViewModel';
import { NativeModules } from 'react-native';

interface NFCReaderViewProps {
  viewModel: NFCReaderViewModel;
}

// const NFCReaderView: React.FC<NFCReaderViewProps> = observer(({viewModel}) => {
//   return (
//     <View>
//       <Text>Lectura de NFC</Text>
//       <Button title="Leer NFC" onPress={() => viewModel.startNFCReading()} />
//       {viewModel.nfcData !== '' && <Text>{viewModel.nfcData}</Text>}
//     </View>
//   );
// });
const {NFCReaderManagerModule} = NativeModules;
const onPress = () => {
    NFCReaderManagerModule.readTag()
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
