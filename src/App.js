import React, { Component } from 'react';
import './App.css';
import Person from './Person/person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
      </div>
    );
    // return React.createElement('h1', {className: 'App'}, 'Hi, I\'m a React App!!!!');
  }
}

export default App;
