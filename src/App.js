import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase'

// just a configuration check, delete later
firebase.firestore().collection('times').add({
  title: 'Rubik\'s Cube',
  time_sec: 100
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>TIME KEEPER</h1>
        <button>Record Time</button>
      </header>
    </div>
  );
}

export default App;
