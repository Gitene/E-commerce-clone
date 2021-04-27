import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCzhPby7Ltr0AZJfA52LjHVn8DBWmSPzAg",
    authDomain: "ecommerce-5770d.firebaseapp.com",
    projectId: "ecommerce-5770d",
    storageBucket: "ecommerce-5770d.appspot.com",
    messagingSenderId: "754702104420",
    appId: "1:754702104420:web:b93a9ee49c717ebb7b6c71",
    measurementId: "G-QP6QZ1W13X"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };