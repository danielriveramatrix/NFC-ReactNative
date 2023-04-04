// import React from 'react';
// import {View, Text, Button, NativeModules} from 'react-native';
// import NFCReaderViewModel from '../models/NFCReaderViewModel';

// interface NFCReaderViewProps {
//   viewModel: NFCReaderViewModel;
// }

// const {NFCReaderManagerModule} = NativeModules;

// const onPress = () => {
//   NFCReaderManagerModule.readTag((response: any) => {
//     console.log('Got response', response);
//   });
// };

// const NewModuleButton = () => {
//   return (
//     <View>
//       <Text>Lectura de NFC</Text>
//       <Button title="Leer NFC" onPress={onPress} />
//     </View>
//   );
// };

// export default NewModuleButton;

// //Got unknown argument class: GotNFCResponse

import React, {useState} from 'react';
import {View, Text, Button, NativeModules, Platform} from 'react-native';
import ControllingAnimationProgress from '../screens/lottie/Lottie';

const NFCReaderManagerModule = Platform.select({
  android: NativeModules.NFCReaderManagerModule,
  ios: NativeModules.NFCManager,
});

const NFCReaderViewModel = () => {
  const [nfcAvailable, setNfcAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const checkNFCReaderAvailability = () => {
    setIsLoading(true);
    NFCReaderManagerModule.isAvailableNFCReader(res => {
      console.log('isAvailableNFCReader', res);
      setNfcAvailable(res);
      setIsLoading(false);
    });
  };

  const readNFC = () => {
    setIsLoading(true);
    NFCReaderManagerModule.readTag((status, response) => {
      console.log('status', status);
      console.log('data', response);
      setIsLoading(false);
    });
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {isLoading ? (
        <ControllingAnimationProgress />
      ) : (
        <>
          {nfcAvailable ? (
            <>
              <Text style={{marginBottom: 20}}>El NFC está disponible</Text>
              <Button title="Leer NFC" onPress={readNFC} />
            </>
          ) : (
            <Text>El NFC no está disponible</Text>
          )}
          <Button
            title="Comprobar disponibilidad del NFC"
            onPress={checkNFCReaderAvailability}
          />
        </>
      )}
    </View>
  );
};

export default NFCReaderViewModel;
