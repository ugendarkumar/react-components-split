import React from 'react';
import './Person.css';



const Person = (props) => {
    return (
    <div className = "Person">
    <p onClick = {props.click}>I am {props.name} and I am {props.age} </p>
    <input type = "text" onChange = {props.change} value = {props.name} />
    <p>{props.children}</p>
    </div>
    )
}

export default Person;