import React from 'react';
import { StoreProvider } from 'easy-peasy';

import 'react-native-gesture-handler';
import Navigation from './src/naviagtion';
import Store from './src/store';
/* eslint react/prop-types: 0 */

const App = () => {
  return (
    <StoreProvider store={Store}>
      <Navigation>
      </Navigation>
    </StoreProvider>
  );
};

export default App;
