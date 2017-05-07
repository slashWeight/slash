import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Login extends Component {
  render() {
    return (
      <div>
        <label for="email">Email:</label><input type="email" name="email" />
      </div>
  );
  }
}

export default Login;
