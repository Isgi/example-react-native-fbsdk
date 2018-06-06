import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AppWithNavigationState from './src/AppNavigator';
import { persistor, store } from './src/redux/store';
import Splash from './src/custom-views/Splash';

const onBeforeLift = () => {
  // take some action before the gate lifts
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={<Splash />}
          onBeforeLift={onBeforeLift}
          persistor={persistor}>
            <AppWithNavigationState />
        </PersistGate>
      </Provider>
    );
  }
}
