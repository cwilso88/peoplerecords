import React from 'react';
import PersonRecordItem from './PersonRecordItem';



const PersonRecordList = ({ people }) => {
    const renderedList = people.map((person) => {
        return <PersonRecordItem key={person.id} person={person} />
    });
        return (
            <div>
               {renderedList}
            </div>
        )
}

export default PersonRecordList;
