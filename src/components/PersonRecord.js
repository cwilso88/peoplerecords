import React, { Component } from 'react';
import axios from 'axios';


class PersonRecord extends Component {
    state = {
        people: []
    }

    async componentDidMount() {
        const response = await axios.get(`https://api.salesloft.com/v2/people.json`, {
        headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_SECRET_NAME}`,
            'Access-Control-Allow-Headers': 'Content-Type: json',
            'Access-Control-Allow-Origin': 'http://foo.example'
        }
    });
    this.setState({ people: response.data });

    console.log(response.data);
    }

    

    render() {
        return (
            <div>
               List of People Records
            </div>
        )
    }
}

export default PersonRecord;
