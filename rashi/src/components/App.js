import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Webcam from 'react-webcam';
import '../styles/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Webcam className="Preview" />
      </div>
    );
  }
}

export default App;
