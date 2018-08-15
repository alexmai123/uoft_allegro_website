import React from 'react';
import { combineReducers } from 'redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import './index.css';

const store = (state = {}, action) => {
  if (action.type.startsWith('STORE_SET_MEMBERS')) {
    return {...state, members: action.value};
  }
  if (action.type.startsWith('STORE_SET_EVENTS')) {
    return {...state, events: action.value};
  }
  return state;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const ReduxStore = createStore(
  combineReducers({store}),
  composeEnhancers(
    applyMiddleware(
      thunkMiddleware,
    ),
  ),
);

export default ReduxStore;
