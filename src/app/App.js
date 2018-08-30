import React from 'react';
import MainRouter from './MainRouter'
import '../shared/assets/css/reset.css';
import 'font-awesome/css/font-awesome.min.css';

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

