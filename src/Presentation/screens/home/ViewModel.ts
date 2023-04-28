import {useEffect, useState} from 'react';
import {NativeModules, Platform} from 'react-native';
import {NFC_READ_STATES} from '../../../Utils/constants/constants';

const NFCReaderManagerModule = Platform.select({
  android: NativeModules.NFCReaderManagerModule,
  ios: NativeModules.NFCReaderManagerModule,
});

console.log(NFCReaderManagerModule.NFCReaderManagerModule)
const useNFCReader = () => {
  const [nfcAvailable, setNfcAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showState, setShowState] = useState('');
  const [showData, setShowData] = useState('');

  const checkNFCReaderAvailability = () => {
    setIsLoading(true);
    NFCReaderManagerModule.isAvailableNFCReader((res: any) => {
      console.log('isAvailableNFCReader', res);
      setNfcAvailable(res);
      setIsLoading(false);
    });
  };

  const readNFC = () => {
    setIsLoading(true);
    setShowData('');
    setShowState('');
    NFCReaderManagerModule.readTag((status: any, response: any) => {
      console.log('status', status);
      console.log('response', response);
      switch (status) {
        case NFC_READ_STATES.SUCCESS:
          setShowData(`La lectura de NFC fue exitosa: ${response}`);
          setShowState(NFC_READ_STATES.SUCCESS);
          break;
        case NFC_READ_STATES.NOT_READ:
          setShowData('No se pudo leer el NFC');
          setShowState(NFC_READ_STATES.NOT_READ);
          break;
        case NFC_READ_STATES.UNAVAILABLE:
          setShowData('El NFC no está disponible');
          setShowState(NFC_READ_STATES.UNAVAILABLE);
          break;
        case NFC_READ_STATES.INVALIDATE_ERROR:
          setShowData('Error al leer el NFC');
          setShowState(NFC_READ_STATES.INVALIDATE_ERROR);
          break;
        default:
          setShowState('');
          setShowData('');
          break;
      }
      setIsLoading(false);
    });
  };

  useEffect(() => {
    checkNFCReaderAvailability();
  }, []);

  return {nfcAvailable, isLoading, readNFC, showState, showData};
};

export default useNFCReader;
