import React, { Component } from 'react';
import './App.css';
import Person from './Person/person';

class App extends Component {

  state = {
    people: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () =>
  {
    // console.log('Was clicked');
    // this.state.people[0].name = 'João'; --> Not to be done
    this.setState(
      {
        people: [
          {name: 'João', age: 28},
          {name: 'Manu', age: 29},
          {name: 'Stephanie', age: 27}
        ] 
      }
    )
  }

  render() 
  {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.people[0].name} age={this.state.people[0].age}/>
        <Person name={this.state.people[1].name} age={this.state.people[1].age}>My hobbies: Racing</Person>
        <Person name={this.state.people[2].name} age={this.state.people[2].age}/>
      </div>
    );
    // return React.createElement('h1', {className: 'App'}, 'Hi, I\'m a React App!!!!');
  }
}

export default App;
