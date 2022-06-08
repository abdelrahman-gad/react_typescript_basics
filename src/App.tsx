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
// import { Private } from './components/auth/Private';
// import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
function App() {
  return (
    <div className="App">
      <List
        items={['item1', 'item2', 'item3']}
        onClick={(item) => console.log(item)}

      />
      <List
        items={[1, 4, 5]}
        onClick={(item) => console.log(item)}

      />
      <List
        items={[
          {
            id:1,
            first: 'Oscar',
            last: 'Gonzalez'
          },
          {
            id:2,
            first: 'abdo',
            last: 'gad'
          },
          {
            id:3,
            first: 'abdelrahman',
            last: 'azmy'
          }
        ]}

        onClick={(item) => console.log(item)}

      />
    </div>
  );
}

export default App;
