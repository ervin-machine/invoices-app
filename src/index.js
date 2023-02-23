import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const initialState = {}
const store = configureStore(initialState)

const root = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
    </Provider>
  </BrowserRouter>, 
  root
);
