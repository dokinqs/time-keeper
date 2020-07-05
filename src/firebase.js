import firebase from 'firebase/app';
import 'firebase/firestore';

  let firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "time-keeper-54321.firebaseapp.com",
    databaseURL: "https://time-keeper-54321.firebaseio.com",
    projectId: "time-keeper-54321",
    storageBucket: "time-keeper-54321.appspot.com",
    messagingSenderId: "130377182557",
    appId: "1:130377182557:web:0c7184325afa8b77370cb4",
    measurementId: "G-L6JP3R1QLC"
  };
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

export default firebase;