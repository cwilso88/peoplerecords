import React, { Component } from 'react';
import axios from 'axios';
class PersonRecord extends Component {
    state = {
        people: []
    }

    componentDidMount() {
        axios.get()
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
