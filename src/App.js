import React from 'react';
import api from './api/api';
import Header from './components/Header';
import CharacterCount from './components/CharacterCount';
import Menu from './components/Menu';
import PeopleRecords from './components/PeopleRecords';
import PersonRecord from './components/PersonRecord';


import './css/main.css';

require('dotenv').config()

class App extends React.Component {
  state = {
    people: []
}

componentDidMount() {
  this.onGetRecords('salesloft');
}

onGetRecords = async (term) => {
    const response = await api.get('/search', {
      params: {
        q: term
      }
    });

    console.log(response);
    this.setState({ people: response });
}

  render() {
    return (
      <div className="App">
       <Menu />
        <div className="container">
          <Header branding="The best source to locate records" subtitle="Search the records for each person."/>
          <hr/>
          <PeopleRecords />
  
          <Header branding="Current Characters in Use" subtitle="A count of all characters in use for email address."/>
          <CharacterCount />
          <PersonRecord />
        </div>
      </div>
    );
  }
}

export default App;
