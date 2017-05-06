import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import Webcam from 'react-webcam';
import Camera from '../components/camera';
import Login from '../components/login';
import '../styles/App.css';

var User = {
  email: 'johndoe@example.org',
  photos: ['//example.org/photos/photo.png','//example.org/photos/photo1.png'],
  mostRecentPhoto: ['//example.org/photos/photo1.png'],
  mostRecentBodyfat: 0.25,
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <br />
        <Camera />
      </div>
    );
  }
}

export default App;
