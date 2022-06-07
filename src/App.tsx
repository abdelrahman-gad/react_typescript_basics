import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Input from './components/Input';
import Container from './components/Container';
function App() {

  const personList = [
    {
      first: 'abdelrahman',
      last: 'gad'
    },
    {
      first: 'ahmed',
      last: 'gad'
    },
    {
      first: 'mohamed',
      last: 'gad'
    }
  ];

  const personName = {
    first: 'Abdelrahman',
    last: 'Gad'
  }
  return (
    <div className="App">
      <Greet name="abdelrahman" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={personList} />
      <Status status='error' />
      <Heading>Child Text </Heading>
      <Oscar>
        <Heading> Leonardo decaprio </Heading>
      </Oscar>

      <Button
        handleClick={(event, id) => { console.log('Button Clicked', event, id) }}
      />
      <Input value="" handleChange={(event)=>console.log(event)}   />
      <Container styles={{ border:'1px solid red',padding:'5px' }} /> 
    </div>
  );
}

export default App;
