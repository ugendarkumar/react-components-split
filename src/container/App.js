import React, { Component } from 'react';
import  './App.css';

// hoc

import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxillary';
//import ErrorBoundary from '../errorBoundary/errorBoundary';



import Cockpit from '../components/cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] Constructor');
  }

  state = {
    persons :[
      {name:'ugendar',age:25,id:1000},
      {name:'Ziva',age:25,id:1001},
      {name:'Mahi',age:27,id:1002}
    ],
    showPersons:false,
    showCockpit:true,
    changeCounter:0,
    authenticated:false
  }

   static getDerivedStateFromProps(props,state){
      console.log('[App.js] getDerivedStateFromProps - props', props);
      return state;
    }
  
  nameChangeHandler = (event, index) => {
    let persons = [...this.state.persons];
    let person = { ...this.state.persons[index] };
    person.name = event.target.value;
    persons[index] = person;
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    })
  }


  deletePersonHandler = (event,index) => { 
    let persons = [...this.state.persons];
    persons.splice(index,1)
    this.setState({persons:persons})
 
  }

  togglePersonHandler = (event) => {
    this.setState({ showPersons: !this.state.showPersons })
  }

  showCockpit = () => {
    this.setState({ showCockpit: !this.state.showCockpit })
  }


  loginHandler = () => {
    this.setState({authenticated:true})
    console.log(this.state.authenticated)
  }


  // componentWillMount(){
  //   console.log('[App.js] ComponentWillMount()');
  // }



  shouldComponentUpdate(nextProps,nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(prevProp,prevState){
    console.log('[App.js] componentDidUpdate')
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount')
  }


  render() {
    console.log(`[App.js] rendering ..........`);
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons 
           persons={this.state.persons}
           isAuthenticated = {this.state.authenticated}
           nameChange={this.nameChangeHandler}
           deletePerson={this.deletePersonHandler}>
           </Persons>
        </div>
      )
    }
 
    return (
      <Aux>
     <button onClick = {this.showCockpit}>Toggle Cockpit</button>
       {(this.state.showCockpit) ? 
       <Cockpit
        appTitle ={this.props.appTitle}
        login = {this.loginHandler}
        showPersons = {this.state.showPersons} 
        personsLength = {this.state.persons.length} 
        nameChangeHandler = {(event ) => {this.togglePersonHandler(event)}}>
       </Cockpit>:null
       }
        {persons}
        </Aux>
      );
 // return React.createElement('div',{className:'App'},React.createElement('h1',null,'I\'m react app'));
}

}

export default withClass(App,"App");
