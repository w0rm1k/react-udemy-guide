import React, { PureComponent } from 'react';
import classes from './App.css';
import PersonList from '../components/PersonList/PersonList';
import Cockpit from '../components/Cockpit/Cockpit';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      persons: [
        { id: 'asfa1', name: 'Viktor', age: 25 },
        { id: 'vasdf1', name: 'Ariel', age: 24 },
        { id: 'asdf11', name: 'Arianna', age: 0.5 }
      ],
      otherState: 'some other value',
      toggleClicked: 0,
      showPersons: false,
      authenticated: false,
    };

    console.log('[App.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  /*shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside shouldComponentUpdate()', nextProps, nextState);
    return nextState.persons !== this.state.persons ||
           nextState.showPersons !== this.state.showPersons;
    //return true;
  }*/

  componentWillUpdate(nextProps, nextState) {
    console.log(
      '[UPDATE App.js] Inside componentWillUpdate()',
      nextProps,
      nextState
      );
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate()');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      '[UPDATE App.js] Inside getDerivedStateFromProps()',
      nextProps,
      prevState
      );

    return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log('[UPDATE App.js] Inside getSnapshotBeforeUpdate()');
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );
  }

  deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( (prevState, props) => { //callback в setState принимает текущий state и props
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1,
      }
    });
  }

  loginHandler = () => {
    this.setState({ authenticated: true });
  }

  render () {
    console.log('[App.js] Inside render()');
    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          <PersonList 
            persons={this.state.persons}
            click={this.deletePersonHandler}
            change={this.nameChangedHandler}/>
        </div>
      );
    }

    return (
      <Aux>
        <button onClick={() => {this.setState({showPersons: true})}}>Show persons</button>
        <Cockpit 
          appTitle={this.props.title}
          persons={this.state.persons} 
          click={this.togglePersonsHandler}
          login={this.loginHandler}
          showPersons={this.state.showPersons}/>
        <AuthContext.Provider value={this.state.authenticated}> {persons} </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);