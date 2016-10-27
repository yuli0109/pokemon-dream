import React, { Component } from 'react';
import './App.css';
import NavBar from './containers/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
