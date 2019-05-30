import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Root from './pages/Root';

const App: React.FC = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);

export default App;
