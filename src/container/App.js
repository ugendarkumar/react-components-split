import React, { Component } from 'react';
import  './App.css';
import Persons from '../components/Persons/Persons';
//import ErrorBoundary from '../errorBoundary/errorBoundary';
class App extends Component {
  state = {
    persons :[
      {name:'ugendar',age:25,id:1000},
      {name:'ugi',age:25,id:1001},
      {name:'neethu',age:27,id:1002}
    ],
    showPersons:false
  }

  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons]
    persons[personIndex] = person;
    this.setState({persons:persons})
  }

  toggleNameHandler = () => {
    this.setState({showPersons:!this.state.showPersons})
  }

  deletePersonHandler = (deleteIndex) => {
   // const persons = this.state.persons.slice();
    const persons =[...this.state.persons];
     persons.splice(deleteIndex,1);
    this.setState({persons:persons});
  };


  render() {
    let persons = null;
    let btnClass = '';
if (this.state.showPersons) {
  persons = (
  <div> {
     <Persons persons = {this.state.persons}
     clicked =  { this.deletePersonHandler} 
     changed = {this.nameChangedHandler} />
  }
  </div>  
    )
    
    btnClass ='Red';
      }
      const assignedClasses = [];
     
      if (this.state.persons.length <= 2) {
        assignedClasses.push('red');
      }

      if (this.state.persons.length <= 1) {
        assignedClasses.push('bold');
      }
    return (
     <div className='App'>
     <h1>Hi i am a react app!</h1>
      <p className ={assignedClasses.join(' ')}>This is really working!</p>
      <button className = {btnClass} onClick = {this.toggleNameHandler}>Toggle persons</button>
      {persons}
      </div>
    );
 // return React.createElement('div',{className:'App'},React.createElement('h1',null,'I\'m react app'));
}

}

export default App;
