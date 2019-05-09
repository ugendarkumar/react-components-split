import React from 'react';

import './Cockpit.css';



const Cockpit = (props) => {

let btnClass = '';

let assignClass = [];

if(props.showPersons){
  btnClass = 'Red';
}

  if (props.persons.length <= 2) {
     assignClass.push('red');
  }

  if(props.persons.length <= 1){ 
    assignClass.push('bold');
  }

  
  return (           
    <div className ="Cockpit">
      <h1>{props.appTitle}</h1>
      <p className ={assignClass.join(' ')}>This is really working</p>
      <button className ={btnClass} onClick ={props.nameChangeHandler}>Toggle Persons</button>
    </div>
  )
}


export default Cockpit;