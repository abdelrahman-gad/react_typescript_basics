import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
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
       <Greet  name="abdelrahman"  isLoggedIn={true} />
       <Person  name={personName}  />
       <PersonList  names={personList}   />
       <Status  status='error'   />
       <Heading>Child Text </Heading>
        <Oscar>
          <Heading> Leonardo decaprio </Heading>
        </Oscar>
    </div>
  );
}

export default App;
