import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import './index.css';
import App from './components/App';

const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);

ReactDOM.render( 
  <Provider store={store}>
  <App / > 
  </Provider>,
  document.getElementById('root')
);