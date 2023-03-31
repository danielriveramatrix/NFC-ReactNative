import {NativeModules} from 'react-native';
import {NFCReaderManagerType} from './NFCReaderManagerType';

const {NFCReaderManagerModule} = NativeModules;

class NFCReaderManager implements NFCReaderManagerType {
  private nfcReaderManager: NFCReaderManagerType;

  constructor() {
    this.nfcReaderManager = NFCReaderManagerModule;
  }

  async requestNFCPermission(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (this.nfcReaderManager) {
        this.nfcReaderManager
          .requestNFCPermission()
          .then(granted => resolve(granted))
          .catch(error => reject(error));
      } else {
        reject('NFCReaderManagerModule is not initialized');
      }
    });
  }

  readTag(callback: (data: string) => void): void {
    if (this.nfcReaderManager) {
      this.nfcReaderManager.readTag(callback);
    } else {
      throw new Error('NFCReaderManagerModule is not initialized');
    }
  }
}

export default new NFCReaderManager();
