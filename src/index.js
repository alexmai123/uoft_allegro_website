import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import 'autotrack/autotrack';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, browserHistory, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
