/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import typesReducer from './store/modules/lotterys/reducers/reducer';
import betsReducer from './store/modules/bets/reducers/reducer';
import authReducer from './store/modules/auth/reducer/reducer';
import createSagaMiddleware from 'redux-saga';
import { watchLottery } from './store/modules/lotterys/sagas';
import { watchAuth } from './store/modules/auth/sagas';
import { watchBets } from './store/modules/bets/sagas';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  types: typesReducer,
  bets: betsReducer,
  auth: authReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(watchLottery);
sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchBets);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
