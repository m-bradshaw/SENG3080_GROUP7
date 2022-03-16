import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
//import Loginscreen from './Loginscreen';
import Login from './Login';
//import MainPage from './MainPage';
import Main from './Main';
import AOS from 'aos';
import { isMobile } from 'react-device-detect';

import 'aos/dist/aos.css';
import '../css/App.css';
import '../css/fonts.css';

class AppComponent extends Component {
  componentDidMount() {
    setTimeout(() => {
      AOS.init({
        offset: isMobile ? 10 : 100,
      });
      AOS.refresh();
    }, 1500);
  }

  render() {
    return (
      // <Router hashType="noslash" basename={process.env.BASE_PATH}>
        <div>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/Main' element={<Main/>}></Route>
        </Routes>
      </div>
      // </Router>
    );
  }
}

export default AppComponent;
