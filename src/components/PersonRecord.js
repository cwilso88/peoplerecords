import React, { Component } from 'react';
import getRecordList from '../api/api.js';

class PersonRecord extends Component {
    state = {
        people: []
    }

    componentDidMount() {
        getRecordsList.get('')
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
