import React from 'react';
import {View} from 'react-native';
import AppNavigator from '_navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import createStore from './redux/createStore';
import {appReducers} from './redux/reducer';
import FlashMessage from 'react-native-flash-message';

const {store, persistor} = createStore(appReducers);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<View />} persistor={persistor}>
        <View style={{flex: 1}}>
          <AppNavigator />
          <FlashMessage position="top" duration={3000} />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
