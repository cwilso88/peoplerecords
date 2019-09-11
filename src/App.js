import React from 'react';
import api from './api/api';
import Header from './components/Header';
import CharacterCount from './components/CharacterCount';
import Menu from './components/Menu';
import PeopleRecords from './components/PeopleRecords';
import PersonRecord from './components/PersonRecord';
import axios from 'axios';


import './css/main.css';



class App extends React.Component {
  state = {
    people: []
}

  componentDidMount() {
    this.getPeopleRecords();
  }

  getPeopleRecords = async () => {
    const response = await axios.get('https://my-json-server.typicode.com/cwilso88/db/users');

    console.log(response.data);
    this.setState({
      people: response.data
    });
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
