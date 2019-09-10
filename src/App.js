import React from 'react';
import Header from './components/Header';
import CharacterCount from './components/CharacterCount';
import Menu from './components/Menu';
import PeopleRecords from './components/PeopleRecords';
import PersonRecord from './components/PersonRecord';
import './css/main.css';

function App() {
  return (
    <div className="App">
     <Menu />
     <Header branding="The best source to locate records" subtitle="Search the records for each person."/>
     <PeopleRecords />

     <Header branding="Current Characters in Use" subtitle="A count of all characters in use for email address."/>
     <CharacterCount />
     <PersonRecord />
    </div>
  );
}

export default App;
