import React, { Component } from 'react';
import axios from 'axios';


class PersonRecord extends Component {
    state = {
        people: []
    }

    componentDidMount() {
        axios.get('https://api.salesloft.com/v2/people.json', {
            params: { email_addresses: term },
            headers: {
                
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
