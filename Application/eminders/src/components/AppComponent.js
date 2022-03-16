import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Loginscreen from 'components/Loginscreen';
import Mainpage from 'components/Mainpage';
import AOS from 'aos';
import { isMobile } from 'react-device-detect';

import 'aos/dist/aos.css';
import './App.css';
import './fonts.css';

class App extends Component {
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
      <Router hashType="noslash" basename={process.env.BASE_PATH}>
        <Switch>
          <Route exact path="/" component={Loginscreen}>
              <div>
                  <Link to="/Home">Homepage</Link>
              </div>
          </Route>
          <Route exact path="/Home" component={Mainpage}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
