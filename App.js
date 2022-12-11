import React from 'react';
import {Nav} from './common/components/nav/Nav';
import {Provider} from 'react-redux';
import {store} from './state/store';

const App = () => {
  return (
    <Provider store={store}>
      <Nav />
    </Provider>
  );
};

export default App;
