import React, { Component } from 'react';
import './App.scss';

import Routes from './Routes';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {Routes}
      </div>
    );
  }
}