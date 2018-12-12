import  React from "react";

import Person from './Person/Person';

const Persons = (props) => props.persons.map((person,index) => {
            return (<Person click = {(event) => props.clicked(index)} 
            change = {(event) => props.changed(event,person.id)}
            name = {person.name} age = {person.age}
            key = {person.id}> </Person>                   
)});

export default Persons;