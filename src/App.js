import React, {Component} from 'react';
import './App.css';
import Person from './Person/person';

class App extends Component
{

  state = {
    people: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value'
  };

  switchNameHandler = (newName) =>
  {
    // console.log('Was clicked');
    // this.state.people[0].name = 'João'; --> Not to be done
    this.setState(
      {
        people: [
          {name: newName, age: 28},
          {name: 'Manu', age: 29},
          {name: 'Stephanie', age: 27}
        ] 
      }
    )
  };

  nameChangedHandler = (event) =>
  {
    this.setState(
      {
        people: [
          {name: event.target.value, age: 28},
          {name: 'Manu', age: 29},
          {name: 'Stephanie', age: 27}
        ] 
      }
    )
  } 

  render() 
  {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button style={style}
          onClick={() => this.switchNameHandler('Test')}>Switch Name</button>
        <Person name={this.state.people[0].name} 
          age={this.state.people[0].age}
          changed={this.nameChangedHandler}/>
        <Person name={this.state.people[1].name} 
          age={this.state.people[1].age}
          click={this.switchNameHandler.bind(this, 'João!!!')}>
          My hobbies: Racing
        </Person>
        <Person name={this.state.people[2].name} 
          age={this.state.people[2].age}/>
      </div>
    );
    }
    // return React.createElement('h1', {className: 'App'}, 'Hi, I\'m a React App!!!!');
}

export default App;
