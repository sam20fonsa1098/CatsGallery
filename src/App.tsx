import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import Galery from './pages/Galery';

const App: React.FC = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#312e38"
        translucent
      />
      <View style={{ flex: 1, backgroundColor: '#312e38' }}>
        <Galery />
      </View>
    </>
  );
};

export default App;
