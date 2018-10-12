import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class IntroComponent extends Component {
  render() {
    return (
      <div>
        <h2>Super Duper Form</h2>
        <Link to="/user/piotrek">Go for it!</Link>
        <p>test if hot reload works</p>
        <p>oh yes it does</p>
      </div>
    );
  }
}
