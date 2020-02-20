import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBUkl5nNhwcYeeIkr9OMlOqPMsL6qF2wpw",
    authDomain: "crud-d8225.firebaseapp.com",
    databaseURL: "https://crud-d8225.firebaseio.com",
    projectId: "crud-d8225",
    storageBucket: "crud-d8225.appspot.com",
    messagingSenderId: "189769872041",
    appId: "1:189769872041:web:ba75e24f70c1d0a5a5afb8"
  };
  // Initialize Firebase
 const firebaseApp= firebase.initializeApp(config);

 firebaseApp.firestore().settings({timestmapsInSnapshots: true})

 export default firebaseApp.firestore()