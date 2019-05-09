import React,{useEffect} from 'react';

import './Cockpit.css';



const Cockpit = (props) => {

  useEffect(() => {
   console.log('[Cockpit.js] useEffect');
   
   setTimeout(() => {
     alert('get data from cloud');
   },1000)
  return () => {
    console.log('[Cockpit.js] clean up work in useEffect')
  }
  },[]);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] clean up work in 2nd useEffect')
    }
  });

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