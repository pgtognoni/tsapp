import React from 'react';
import './App.css';
import Parent from './props/Parent';
import GuestsList from './state/GuestsList';
// import UserSearch from './state/UserSearch';
import EventComponent from './events/EventComponent';
import UserSearch from './refs/UserSearch';

function App() {
  return (
    <div className="App">
      <Parent />
      <GuestsList />
      <UserSearch />
      <EventComponent />
    </div>
  );
}

export default App;
