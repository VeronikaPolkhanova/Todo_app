import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import {Provider} from 'react-redux';

import store from './store/index';

import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
       <App /> 
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
