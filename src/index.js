import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import 'autotrack/autotrack';
import { Router, Route, browserHistory, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ReduxStore from './redux'

ReactDOM.render(<Provider store={ReduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
