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
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 25},
        {name: 'Ariel', age: 24},
        {name: 'Arianna', age: 0.5},
      ],
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Viktor', age: 25},
        {name: event.target.value, age: 24},
        {name: 'Arianna', age: 0.5},
      ],
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Victoria')}>Switch name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}>My hobbies: Programming</Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Lololala')}
          change={this.nameChangeHandler} />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
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
