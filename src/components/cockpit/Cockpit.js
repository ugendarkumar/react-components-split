import React,{useEffect,useRef,useContext} from 'react';

import './Cockpit.css';

import AuthContext from '../../context/auth-context';

const Cockpit = props => {

  const toggleBtnRef = useRef(null);
  
  const context = useContext(AuthContext);

  /* Ref can be used to access the element in JSX. In functional components there is useRef hook
  which is intialized to a variable which gets null as a default argument and it's set to ref property to an
  element (here in toggle button) in useEffect (after jsx is rendered) this is called with click event with "current" property using 
  dot-notation to access the input field .
 */
  useEffect(() => {
   console.log('[Cockpit.js] useEffect');
   
  //  setTimeout(() => {
  //    alert('get data from cloud');
  //  },1000)
  toggleBtnRef.current.click()
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

  if (props.personsLength <= 2) {
     assignClass.push('red');
  }

  if(props.personsLength <= 1){ 
    assignClass.push('bold');
  }

  
  return (           
    <div className ="Cockpit">
      <h1>{props.appTitle}</h1>
      <p className ={assignClass.join(' ')}>This is really working</p>
      <button ref = {toggleBtnRef} className ={btnClass} onClick ={props.nameChangeHandler}>Toggle Persons</button>
      {/* <AuthContext.Consumer> */}
        
         <button onClick={context.login}>Login</button>
        
              {/* </AuthContext.Consumer>
       */}
    </div>
  )
}


export default React.memo(Cockpit);