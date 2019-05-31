import React,{Component} from 'react';
import './Person.css';
import Aux from '../../../hoc/Auxillary';
import withClass from '../../../hoc/withClass';
import propTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';


class Person extends Component{

    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount(){
     //   document.querySelector('input').focus();
  
    /*
     [step - 1]
    using "ref" property in the element passing by in a callback function with an argument which has the element which can
    be intialized to a global property which is not like state and can be called in componentDidMount - follow this method in (step - 1)
     here the last input element is set to focus.

    */
  // [step - 1]   this.inputElement.focus()
    
    /*
    [step - 2] create a constructor function, intialize a property with built in React.createRef()
      using the "ref" property in the element intialize to the property in constructor function
      in componentDidMount() call the property in constructor with current property using dot-notation to get individual elements
      
    */

    // In both methods individual elements are accessed

    //[step - 2]
    console.log(this.inputElementRef.current)
    this.inputElementRef.current.focus();
  console.log(this.context)
    }

    render(){
        console.log(this.props.isAuth);
        console.log('[Person.js] rendering .............')
        
        // HOC Aux is used to wrap dom elements instaed of root elements like <div>
        // Built in fragment module can be used instead of creating HOC like Aux just import Fragment like 'Component'
        // from 'react' and use <Fragment> </Fragment>

        return (
            <Aux>
              
                    {
                        this.context.authenticated ? <p>Authenticated</p> : <p>Log-in</p>
                    }
                <p onClick={this.props.delete} >I am {this.props.name} and age is {this.props.age}</p>
                <input type="text"
                    onChange={this.props.change}
                 // [step - 1]  ref={(inputElem) => {this.inputElement = inputElem}}
                    //[step -2]
                    ref = {this.inputElementRef}
                    value={this.props.name}></input>
            </Aux>
        )
    }
}

Person.propTypes = {
    change:propTypes.func,
    delete:propTypes.func,
    age:propTypes.number,
    name:propTypes.string
}  


export default withClass(Person,"Person");