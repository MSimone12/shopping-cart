import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import store from './store';

import Root from './pages/Root';

const App: React.FC = () => (
  <Router history={createBrowserHistory()}>
    <Provider store={store}>
      <Root />
    </Provider>
  </Router>
);

export default App;
