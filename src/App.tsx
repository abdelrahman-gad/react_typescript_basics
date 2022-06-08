import React from 'react';
import './App.css';

// import Greet from './components/Greet';
// import Person from './components/Person';
// import PersonList from './components/PersonList';
// import Status from './components/Status';
// import Heading from './components/Heading';
// import Oscar from './components/Oscar';
// import Button from './components/Button';
// import Input from './components/Input';
// import Container from './components/Container';
// import LoggedIn from './components/state/LoggedIn';
// import Counter from './components/state/Counter';
// import {ThemeContextProvider} from './components/context/ThemeContext';
// import {Box} from './components/context/Box';
// import {UserContextProvider} from './components/context/UserContext';
// import {User} from './components/context/User';
// import { DomRef } from './components/DomRef';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
function App() {


  return (
    <div className="App">
      <Private isLoggedIn={true} component={Profile} />
    </div>
  );
}

export default App;
