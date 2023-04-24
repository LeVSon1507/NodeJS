import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(allReducers);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
   <App />
   </Provider>
  </React.StrictMode>
);
