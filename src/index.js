import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './testAndWorker/registerServiceWorker';
import App from './App';
import './css/bootstrap.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { rootReducer } from './store/rootReducer'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
