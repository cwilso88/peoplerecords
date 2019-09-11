import React, { Component } from 'react';
import axios from 'axios';


class PersonRecord extends Component {
    state = {
        people: []
    }

    async getRecords() {
        const response = await axios.get('https://api.salesloft.com/v2/people.json', {
        headers: {
            'Proxy-Authorization': `Bearer ${process.env.REACT_APP_SECRET_NAME}`,
            'Content-Type': 'application/json',
        }
    });
    this.setState({ people: response.data });
    }

    

    render() {

        this.getRecords();
        return (
            <div>
               List of People Records
            </div>
        )
    }
}

export default PersonRecord;
