import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Webcam from 'react-webcam';


class Camera extends Component {

  submit(file) {

  }

  render() {
    return (
      <div className="Camera">
        <Webcam className="Preview" />
        <button onSubmit={() => {this.submit()}}>📸</button>
        <br />
        Or upload a png...
        <br />
        <input type="file" id="photoFile" onChange={() => this.submit()} />
      </div>
    );
  }
}

export default Camera;
