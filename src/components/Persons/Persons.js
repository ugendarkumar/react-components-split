import  React , {Component} from "react";

import Person from './Person/Person';

class Persons extends Component{


//    static getDerivedStateFromProps(props,state){
//    console.log('Persons.js getDerivedStateFromProps');
//    return state;
//     }

    shouldComponentUpdate(nextProps,nextState){
        console.log('Persons.js shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('Persons.js getSnapshotBeforeUpdate');
      return {message:'Props from snapshot'}
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    componentDidUpdate(prevProps,prevState,getSnap){
        console.log('Persons.js componentDidUpdate');
        console.log(getSnap)
    }
render(){
    console.log(`[persons.js] rendering ...........`);
    return (this.props.persons.map((x,index) =>{ 
    return <Person name ={x.name} age ={x.age} change = {(event) => this.props.nameChange(event,index)} delete ={(event) => {this.props.deletePerson(event,index)}} key ={x.id}></Person>
     }))
}
}

 




export default Persons;