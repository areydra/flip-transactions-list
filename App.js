import React from 'react';
import {SafeAreaView} from 'react-native'
import {Provider} from 'react-redux' 

import store from './store'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <HomeScreen />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
