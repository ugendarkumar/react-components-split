import React,{Component} from 'react';
import './Person.css';
//import Aux from '../../../hoc/Auxillary';

class Person extends Component{
    render(){
        console.log('[Person.js] rendering .............')
        
        // HOC Aux is used to wrap dom elements instaed of root elements like <div>

        // Built in fragment module can be used instead of creating HOC like Aux just import Fragment like 'Component'
    // from 'react' and use <Fragment> </Fragment>
    
        return (
    
  // <Aux>
    <div className ="Person">
        <p onClick = {this.props.delete} >I am {this.props.name} and age is {this.props.age}</p>
    
    <input type="text" onChange = {this.props.change} value = {this.props.name}></input>
    </div>
    //    </Aux>
        
    )
    }
    
}

  


export default Person;