// import firebase  from '@firebase/compat/app';
import '@firebase/firestore'


import firebase from 'firebase'
// require('firebase/auth')

const firebaseConfig = {
    apiKey: "AIzaSyBbI2pBSRGzjgxXUOJxUtM3BcE-sreBuP4",
    authDomain: "slack-clone-28559.firebaseapp.com",
    projectId: "slack-clone-28559",
    storageBucket: "slack-clone-28559.appspot.com",
    messagingSenderId: "234049875172",
    appId: "1:234049875172:web:6b65ffa9617a24c4c550f1"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


export {auth, provider, db}










