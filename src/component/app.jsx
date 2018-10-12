import React, { Component } from 'react';

import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Route
} from 'react-router-dom';

import { IntroComponent } from './intro';
import { FormComponent } from './form';

export class AppComponent extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={IntroComponent} />
          <Route exact path="/user/:NAZWA" component={FormComponent} />
        </div>
      </Router>
    );
  }
}
