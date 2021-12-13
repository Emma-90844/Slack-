// // import firebase  from '@firebase/compat/app';
// import '@firebase/firestore'


// import firebase from 'firebase'
// // require('firebase/auth')

// const firebaseConfig = {
//   apiKey: "AIzaSyAKlHTRAJHUSV3KUQJShOYVVt-qzWJDeEo",
//   authDomain: "slack-clone-7bc44.firebaseapp.com",
//   projectId: "slack-clone-7bc44",
//   storageBucket: "slack-clone-7bc44.appspot.com",
//   messagingSenderId: "1065027148297",
//   appId: "1:1065027148297:web:54b7ddefa001ef511b76d8"
// };

//   const firebaseApp = firebase.initializeApp(firebaseConfig);
//   const db = firebaseApp.firestore();
//   const auth = firebase.auth();
//   const provider = new firebase.auth.GoogleAuthProvider();


// export {auth, provider, db}
import firebase from "firebase";
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCRL544TddX78tKd66DcE6Ftt1XuQTjtCs",
  authDomain: "slack-clone-f4237.firebaseapp.com",
  projectId: "slack-clone-f4237",
  storageBucket: "slack-clone-f4237.appspot.com",
  messagingSenderId: "573406534144",
  appId: "1:573406534144:web:d1bb6003d0cd069c8dd6e5",
  measurementId: "G-PHK4HX2VV8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider  = new firebase.auth.GoogleAuthProvider();
 

export { auth, provider, db};






