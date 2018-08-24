import React, { Component } from 'react';
import MainRouter from './MainRouter'
import '../shared/assets/css/reset.css';
import 'font-awesome/css/font-awesome.min.css';

import {
  HomePage
} from '../pages';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MainRouter />
      </div>
    );
  }
}

export default App;

