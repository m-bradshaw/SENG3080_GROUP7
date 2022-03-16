import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
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

    const MyApp = () => (
      <div>
        <Switch>
          {/* <Route exact path='/' component={Login}></Route> */}
          <Route path='/Login' component={Login}></Route>
          <Route path='/Main' component={Main}></Route>
        </Switch>
      </div>
    )

    return (
      // <Router hashType="noslash" basename={process.env.BASE_PATH}>
        <Switch>
          <MyApp></MyApp>
        </Switch>
      // </Router>
    );
  }
}

export default AppComponent;
