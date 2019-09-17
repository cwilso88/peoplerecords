import React from 'react';
//import {KEY} from './api/api';
import Header from './components/Header';
import CharacterCount from './components/CharacterCount';
import Menu from './components/Menu';
import PeopleRecords from './components/PersonRecordItem';
//import PersonRecord from './components/PersonRecord';
import axios from 'axios';
import './css/main.css';
require('dotenv').config()



class App extends React.Component {
  state = {
    people: []
}


  async getPeopleRecords() {
    const response = await axios.get('https://cors-anywhere.herokuapp.com/https://api.salesloft.com/v2/people.json', {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      }
    });

    console.log(response.data);
  }

  

  render() {
    return (
      <div className="App">
       <Menu />
        <div className="container">
          <Header branding="The best source to locate records" subtitle="Search the records for each person."/>
          <hr/>
          <PeopleRecords getPeopleRecords={this.getPeopleRecords}/>
  
          <Header branding="Current Characters in Use" subtitle="A count of all characters in use for email address."/>
          <CharacterCount />
          
        </div>
      </div>
    );
  }
}

export default App;
