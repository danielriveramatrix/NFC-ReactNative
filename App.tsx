import React from 'react';
import {Provider} from 'mobx-react';
import NFCReaderViewModel from './src/models/NFCReaderViewModel';
import HomeScreen from './src/screens/home/Home';
import AnimationWithImperativeApi from './src/screens/lottie/Lottie';

const App: React.FC = () => {
  const nfcReaderViewModel = new NFCReaderViewModel();

  return <HomeScreen />;
};

export default App;
