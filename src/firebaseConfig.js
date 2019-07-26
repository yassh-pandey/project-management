import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyDcHSDHEKseXQEWOTmDm58dgyjmkwFFBEc",
    authDomain: "project-management-9c518.firebaseapp.com",
    databaseURL: "https://project-management-9c518.firebaseio.com",
    projectId: "project-management-9c518",
    storageBucket: "",
    messagingSenderId: "588543558386",
    appId: "1:588543558386:web:a6fdac8d8dc2b86c"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase;