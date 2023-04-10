import React from 'react';
import {View, Platform} from 'react-native';
import ControllingAnimationProgress from '../lottie/Lottie';
import NotNFC from '../notNFC/NotNFC';
import ShowNFC from '../showNFC/ShowNFC';
import YesNFC from '../yesNFC/YesNFC';
import useNFCReader from './ViewModel';
import {useEffect} from 'react';
import {NFC_READ_STATES} from '../../../Utils/constants/constants';

const Home = () => {
  const {nfcAvailable, isLoading, readNFC, showState, showData} =
    useNFCReader();

  useEffect(() => {
    console.log('showNFC', showState);
  });

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 16,
      }}>
      {isLoading && Platform.OS === 'android' ? (
        <ControllingAnimationProgress />
      ) : (
        <>
          {nfcAvailable && <YesNFC readNFC={readNFC} />}
          {!nfcAvailable && <NotNFC />}
          {showState === NFC_READ_STATES.SUCCESS && <ShowNFC data={showData} />}
        </>
      )}
    </View>
  );
};

export default Home;
