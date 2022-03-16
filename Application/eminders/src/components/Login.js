import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Login extends Component {
  render() {
    return (
    <div className="App">
      <h1>Project Login STUB</h1>
      {/* Link to Main.js */}
      <Link to={'./Main'}>
        <button variant="raised">
            My List
        </button>
      </Link>
    </div>
    );
  }
}
export default Login;