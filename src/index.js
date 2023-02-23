import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// 1
import { Provider } from 'react-redux';
// 2
import { legacy_createStore as createStore } from 'redux';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    case 'SET_NUMBER':
      return action.payload;

    default:
      return state;
  }
};

export const increase = () => {
  return {
    type: 'INCREASE',
  };
};

export const decrease = () => {
  return {
    type: 'DECREASE',
  };
};

// 4
const store = createStore(reducer);

root.render(
  // 3
  <Provider store={store}>
    <App />
  </Provider>
);
