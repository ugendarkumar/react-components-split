import  React , {Component} from "react";

import Person from './Person/Person';

class Persons extends Component {


//    static getDerivedStateFromProps(props,state){
//    console.log('Persons.js getDerivedStateFromProps');
//    return state;
//     }

    shouldComponentUpdate(nextProps, nextState) {
        /* this method helps to optimize the component 
      persons.js being a child component is updated/ re-rendered everytime 
     there is a change in app.js
  
     the below condition ensures the persons.js is re-rendered only when the 
     array persons of reference type has changes  */

        /*
         PureComponent can also be used instead of optimizing using shouldComponentUpdate
        */


        console.log('[Persons.js] shouldComponentUpdate');
        if (
            nextProps.persons !== this.props.persons ||
            nextProps.nameChange !== this.props.nameChange ||
            nextProps.deletePerson !== this.props.deletePerson ||
            nextProps.isAuthenticated !== this.props.isAuthenticated
        ) {
            return true;
        } else {
            return false;
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Persons.js getSnapshotBeforeUpdate');
        return { message: 'Props from snapshot' }
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    componentDidUpdate(prevProps, prevState, getSnap) {
        console.log('Persons.js componentDidUpdate');
        console.log(getSnap)
    }
    render() {
        console.log(`[persons.js] rendering ...........`);
        return (this.props.persons.map((x, index) => {
            return <Person name={x.name} age={x.age}
                change={(event) => this.props.nameChange(event, index)}
                isAuth = {this.props.isAuthenticated}
                delete={(event) => { this.props.deletePerson(event, index) }}
                key={x.id}></Person>
        }))
    }
}

 




export default Persons;