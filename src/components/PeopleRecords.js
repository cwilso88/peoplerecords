import React, { Component } from 'react';
import getPeopleRecords from '../api/api';


class PeopleRecords extends Component {
   
    render() {
        return (
            <div id="PeopleRecords" className="container mt-5">
                <h3>List of Personal Records</h3>
                
               <div className="border border-secondary bg-light justify-items-center">
                <div className="card m-5" style={{width: "28rem"}}>
                    <div className="card-header text-white text-uppercase">
                        Full Name
                    </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Job Title: </li>
                            <li className="list-group-item"><i className="fas fa-envelope-square pr-2"></i>Email:</li>
                            <li className="list-group-item"><i className="far fa-address-card pr-2"></i>Address:</li>
                        </ul>
                    </div>
               </div>
            </div>
        )
    }
}

export default PeopleRecords;
