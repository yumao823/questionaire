import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import { AppRegistry } from 'react-native';
import thunkMiddleware from 'redux-thunk';

import reducers from './app/reducers';
import App from './app/containers/app.js';

let store = createStore(reducers, applyMiddleware(
    thunkMiddleware
));

const BuzzerApp = () => {
  return (
     <Provider store={store}>
        <App />
     </Provider>
  );
};

AppRegistry.registerComponent('BuzzerApp', () => BuzzerApp);
