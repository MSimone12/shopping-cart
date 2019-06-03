import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { persistStore } from 'redux-persist';

import store from './store';

import Root from './pages/Root';

const App: React.FC = () => {
  useEffect(() => {
    persistStore(store);
  });
  
  return (
    <Router history={createBrowserHistory()}>
      <Provider store={store}>
        <Root />
      </Provider>
    </Router>
  );
};

export default App;
