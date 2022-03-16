import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';


class Login extends Component {
  render() {
    return (
    <div className="App">
      <h1>Project Login STUB</h1>
      {/* Link to Main.js */}
      <NavLink to={'../Main'}>
        <button variant="raised">
            My List
        </button>
      </NavLink>
    </div>
    );
  }
}
export default Login;