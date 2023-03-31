import React from 'react';
import {Provider} from 'mobx-react';
import NFCReaderViewModel from './src/models/NFCReaderViewModel';
import HomeScreen from './src/screens/home/Home';

const App: React.FC = () => {
  const nfcReaderViewModel = new NFCReaderViewModel();

  return (
    <Provider nfcReaderViewModel={nfcReaderViewModel}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
