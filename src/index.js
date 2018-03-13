import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './testAndWorker/registerServiceWorker';
import App from './App'
import './css/bootstrap.css'


ReactDOM.render(<App />, document.getElementById('root'));


registerServiceWorker();