import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
function App() {

  const personList = [
    {
      first:'abdelrahman',
      last:'gad'
    },
    {
      first:'ahmed',
      last:'gad'
    },
    {
      first:'mohamed',
      last:'gad'
    }
  ];

  const personName={
    first:'Abdelrahman',
    last:'Gad'
  }
  return (
    <div className="App">
       <Greet  name="abdelrahman" messageCount={100} isLoggedIn={true} />
       <Person  name={personName}  />
       <PersonList  names={personList}   />
    </div>
  );
}

export default App;
