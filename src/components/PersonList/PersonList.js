import React, { PureComponent } from 'react';
import Person from './Person/Person';

class PersonList extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[PersonList.js] Inside Constructor', props);
        this.lastPersonRef = React.createRef();
    }

    componentWillMount() {
        console.log('[PersonList.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[PersonList.js] Inside componentDidMount()');
        this.lastPersonRef.current.focus();
    }    

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE PersonList.js] Inside componentWillRecieveProps()', nextProps);
    }

/*    shouldComponentUpdate(nextProps, nextState) {
        console.log('[UPDATE PersonList.js] Inside shouldComponentUpdate()', nextProps, nextState);
        return nextProps.persons !== this.props.persons ||
               nextProps.click !== this.props.click || 
               nextProps.change !== this.props.change;
        //return true;
    }*/

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE PersonList.js] Inside componentWillUpdate()');
    }

    componentDidUpdate() {
        console.log('[UPDATE PersonList.js] Inside componentDidUpdate()');
    }

    render () {
        console.log('[PersonList.js] Inside render()');
        return (
            this.props.persons.map((person, idx) => {
                return <Person 
                    key={person.id}
                    name={person.name} 
                    age={person.age} 
                    forwardRef={this.lastPersonRef}
                    click={() => this.props.click(idx)}
                    change={(event) => this.props.change(event, person.id)}
                    position={idx} /> 
              })
        )
    }
}

export default PersonList;