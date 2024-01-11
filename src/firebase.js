// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBN_kUjwTGo0gobefvHEO8M0jvkORIkcJU",
    authDomain: "clone-e3175.firebaseapp.com",
    projectId: "clone-e3175",
    storageBucket: "clone-e3175.appspot.com",
    messagingSenderId: "152870650653",
    appId: "1:152870650653:web:3f26202539f083d73697f4",
    measurementId: "G-FD1EJ9RZ3N"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);


  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth}