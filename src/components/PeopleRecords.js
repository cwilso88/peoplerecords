import React, { Component } from 'react';
import getPeopleRecords from '../App';


class PeopleRecords extends Component {

    componentDidMount() {
        this.props.getPeopleRecords();
    }
   
    render() {
        const { id, name, email, phone, department, status, location, image } = this.props.getPeopleRecords;
        
        return (
            <div id="PeopleRecords" className="container mt-5">
                <h3>List of Personal Records</h3>
                
               <div className="border border-secondary bg-light justify-items-center">
                <div className="card m-5" style={{width: "28rem"}}>
                    <div className="card-header text-white text-uppercase">
                        Full NameL Mark Johnson
                    </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Job Title: Engineer</li>
                            <li className="list-group-item"><i className="fas fa-envelope-square pr-2"></i>Email: mark@gmail.com</li>
                            <li className="list-group-item"><i className="far fa-address-card pr-2"></i>Address:Atlanta, GA</li>
                        </ul>
                    </div>
               </div>
               <div className="border border-secondary bg-light justify-items-center">
                <div className="card m-5" style={{width: "28rem"}}>
                    <div className="card-header text-white text-uppercase">
                        Full Name: Sally Joe
                    </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Job Title: Engineer</li>
                            <li className="list-group-item"><i className="fas fa-envelope-square pr-2"></i>Email: sally@gmail.com</li>
                            <li className="list-group-item"><i className="far fa-address-card pr-2"></i>Address: Atlanta, GA</li>
                        </ul>
                    </div>
               </div>
               <div className="border border-secondary bg-light justify-items-center">
                <div className="card m-5" style={{width: "28rem"}}>
                        <div className="card-header text-white text-uppercase">
                            Full Name: Tom Wilson
                        </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Job Title: Engineer</li>
                                <li className="list-group-item"><i className="fas fa-envelope-square pr-2"></i>Email: tom@gmail.com</li>
                                <li className="list-group-item"><i className="far fa-address-card pr-2"></i>Address: Atlanta, GA</li>
                            </ul>
                        </div>
                </div>
            </div>
        )
    }
}

export default PeopleRecords;
