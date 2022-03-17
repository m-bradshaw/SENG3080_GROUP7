import React from 'react';
import {render} from 'react-dom';
import './css/index.css';
import './css/App.scss';
import './css/App.css';
import AppComponent from './components/AppComponent';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

render((
  <BrowserRouter>
    <React.StrictMode>
      <AppComponent />
    </React.StrictMode>
  </BrowserRouter>  
), document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
