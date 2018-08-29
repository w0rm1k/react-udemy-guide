import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [
        {name: 'Viktor', age: 25},
        {name: 'Ariel', age: 24},
        {name: 'Arianna', age: 0.5},
      ],
    }
  };

  nameChangeHandler = (event, personIndex) => {
    const persons = [...this.state.persons];
    persons[personIndex].name = event.target.value;
    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); ES5
    const persons = [...this.state.persons]; //ES6 spread operator
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, idx) => {
            return <Person 
              key={idx}
              name={person.name} 
              age={person.age} 
              click={this.deletePersonHandler.bind(this, idx)}
              change={(event) => this.nameChangeHandler(event, idx)} />
          })}
        </div>  
       )
    }

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle persons</button>
        {persons}
      </div>
  );
      /*return React.createElement(
          "div",
          { className: "App" },
          React.createElement(
              "h1",
              null,
              "Hi, I'm React App"
          )
      );*/
  }
}

export default App;
