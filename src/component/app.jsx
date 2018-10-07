import React, { Component } from "react";

import { IntroComponent } from "./intro";

export class AppComponent extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <IntroComponent />
      </div>
    );
  }
}
