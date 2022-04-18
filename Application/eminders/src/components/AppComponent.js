import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Main from './Main';
import AOS from 'aos';
import { isMobile } from 'react-device-detect';
import {myContext} from './Context';

import '../css/App.css';

class AppComponent extends Component {
  static contextType = myContext;
  componentDidMount() {
    setTimeout(() => {
      AOS.init({
        offset: isMobile ? 10 : 100,
      });
      AOS.refresh();
    }, 1500);
  }
  
  render() {
    let value = this.context;
    console.log(value);

    return (
      // <Router hashType="noslash" basename={process.env.BASE_PATH}>
        <div>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/Login' element={<Login loginRoute="http://localhost:3001/api/v1/auth/google"/>}></Route>
          <Route path='/Main' element={<Main user={value} dataSource="api/v1/reminder"/>}></Route>
        </Routes>
      </div>
      // </Router>
    );
  }
}

export default AppComponent;
