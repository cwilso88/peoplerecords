import React, { Component } from 'react';
import axios from 'axios';


class PersonRecord extends Component {
    state = {
        people: []
    }

     async getPeopleRecords(term) {
        const response = await axios.get('https://api.salesloft.com/v2/people.json', {
            params: { email_addresses: term },
            headers: {
                Authorization: 
                    `Bearer ${process.env.REACT_APP_SECRET_NAME}`
            }
        });
        console.log(response.data);
       }
    

    render() {
        return (
            <div>
                Person Records
            </div>
        )
    }
}

export default PersonRecord;
