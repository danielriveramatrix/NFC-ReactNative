import {Alert, PermissionsAndroid} from 'react-native';
import NFCReaderManagerModule from '../modules/NFCReaderManagerModule';
import {makeAutoObservable} from 'mobx';

class NFCReaderViewModel {
  nfcData: string = '';
  nfcReaderManager: any = null;

  constructor() {
    makeAutoObservable(this);
    this.nfcReaderManager = NFCReaderManagerModule;
  }

  async requestNFCPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.NFC,
        {
          title: 'Permiso de NFC',
          message: 'Esta aplicación requiere acceso al NFC.',
          buttonPositive: 'Aceptar',
        },
      );
      console.log('requestNFCPermission', granted);

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async startNFCReading() {
    try {
      const granted = await this.requestNFCPermission();
      console.log('startNFCReading', granted);
      if (granted) {
        if (this.nfcReaderManager) {
          this.nfcReaderManager.readTag((data: string) => {
            this.nfcData = data;
          });
        } else {
          console.log('NFCReaderManagerModule is not initialized');
        }
      } else {
        console.log('No se ha concedido el permiso para acceder al NFC');
      }
    } catch (error) {
      console.log('Error en startNFCReading:', error);
    }
  }
}

export default NFCReaderViewModel;
