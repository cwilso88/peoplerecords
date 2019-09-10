import React, { Component } from 'react';
import axios from 'axios';


class PersonRecord extends Component {
    state = {
        people: []
    }

    async getPeopleRecords() {
        const response = await axios.get('https://api.salesloft.com/v2/people.json', {
            headers: {
                Authorization: 
                    `Bearer ${process.env.REACT_APP_SECRET_NAME}`
            }
        })
    }

    render() {
        return (
            <div>
                PersonRecord
            </div>
        )
    }
}

export default PersonRecord;
