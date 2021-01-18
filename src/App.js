import React, {Component} from 'react';
import './App.css';
import Person from './Person/person';

class App extends Component
{

  state = {
    people: [
      {id: 'asdas', name: 'Max', age: 28},
      {id: 'dddd', name: 'Manu', age: 29},
      {id: 'wwww', name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPeople: false
  };

  deletePersonHandler = (personIndex) =>
  {
    const people = [...this.state.people];
    people.splice(personIndex, 1);

    this.setState({
      people: people
    });
  }

  nameChangedHandler = (event, id) =>
  {
    const personIndex = this.state.people.findIndex(person => person.id === id);

    const person = {
      ...this.state.people[personIndex]
    };

    person.name = event.target.value;

    const people = [this.state.people];
    people[personIndex] = person;

    this.setState(
      {
        people: people
      }
    );
  } 

  togglePeopleHandler = () =>
  {
    const doesShow = this.state.showPeople;
    this.setState({
      showPeople: !doesShow
    });
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

    let people = null;

    if (this.state.showPeople)
    {
      people = (
        <div>
          {this.state.people.map((person, index) =>
          {
            return <Person name={person.name} 
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      )
    }

    return (
    <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button style={style}
          onClick={this.togglePeopleHandler}>Toggle</button>
        {people}
      </div>
    );
    }
    // return React.createElement('h1', {className: 'App'}, 'Hi, I\'m a React App!!!!');
}

export default App;
