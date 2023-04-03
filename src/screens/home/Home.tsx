import React from 'react';
import {useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
// import NFCReaderViewModel from '../../models/NFCReaderViewModel';
import NFCReaderView from '../../components/NFCReaderView';

const HomeScreen: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return <NFCReaderView />;
};

export default HomeScreen;
