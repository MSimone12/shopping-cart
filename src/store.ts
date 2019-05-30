import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from './reducers';

const middlewares = applyMiddleware(thunk, createLogger());

const store: Store = createStore(reducers, middlewares);

export default store;
