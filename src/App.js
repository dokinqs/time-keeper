import React from 'react';
import logo from './logo.svg';
import './App.css';
import TimesList from './components/times-list';
import AddTimeForm from './components/add-time-form';
// import firebase from './firebase';

// // just a configuration check, delete later
// firebase.firestore().collection('times').add({
//   title: 'Rubik\'s Cube',
//   time_sec: Math.ceil(Math.random() * 40) + 50
// })
// .then(() => {
//   console.log("Successfully Added");
// })
// .catch((err) => {
//   console.error("Error adding document: ", err);
// });

function App() {
  function scrollUp() {
    let doc = document.documentElement;
    let top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

    if (top > 0) {
        window.scrollTo(0, top - 50);
        setTimeout(scrollUp, 5);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>TIME KEEPER</h1>
        <AddTimeForm />
        <TimesList />
        <a className="scrollUp" onClick={scrollUp}>^</a>
      </header>
    </div>
  );
}

export default App;
