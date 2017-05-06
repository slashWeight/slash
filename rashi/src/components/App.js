import React, { Component, Text } from 'react';
import PropTypes from 'prop-types';
import Webcam from 'react-webcam';
import '../styles/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Webcam className="Preview" />
        <button>📸</button>
        <br />
        Or...
        <br />
        <input type="file" id="photoFile" />
      </div>
    );
  }
}

export default App;
