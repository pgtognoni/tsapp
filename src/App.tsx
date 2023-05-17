import React from 'react';
import './App.css';
import Parent from './props/Parent';
import GuestsList from './state/GuestsList';
import UserSearch from './state/UserSearch';

function App() {
  return (
    <div className="App">
      <Parent />
      <GuestsList />
      <UserSearch />
    </div>
  );
}

export default App;
