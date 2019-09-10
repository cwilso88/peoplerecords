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
     <Header branding="The best app"/>
     <CharacterCount />
     <PeopleRecords />
     <PersonRecord />
    </div>
  );
}

export default App;
