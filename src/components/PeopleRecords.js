import React, { Component } from 'react';

class PeopleRecords extends Component {
    render() {
        return (
            <div className="container mt-5">
                <h3>List of Personal Records</h3>
               <div class="card" style={{width: "18rem"}}>
                <div class="card-header bg-primary text-white text-uppercase">
                    Featured
                </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default PeopleRecords;
