import React, { Component } from 'react';
import axios from 'axios';
import getPeopleRecords from '../api/api';


class PersonRecord extends Component {
    state = {
        people: []
    }

    componentDidMount() {
        getPeopleRecords();
    }

    

    render() {
        return (
            <div>
                Hello
            </div>
        )
    }
}

export default PersonRecord;
