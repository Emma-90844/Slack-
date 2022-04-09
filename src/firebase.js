import firebase from "firebase";
import 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyCRL544TddX78tKd66DcE6Ftt1XuQTjtCs",
//   authDomain: "slack-clone-f4237.firebaseapp.com",
//   projectId: "slack-clone-f4237",
//   storageBucket: "slack-clone-f4237.appspot.com",
//   messagingSenderId: "573406534144",
//   appId: "1:573406534144:web:d1bb6003d0cd069c8dd6e5",
//   measurementId: "G-PHK4HX2VV8"
// };

const firebaseConfig = {
  apiKey: "AIzaSyD3Bf12bOPEiQ1bYP-dUkY-lOAsnk9nIvQ",
  authDomain: "slack-clone-26ed3.firebaseapp.com",
  projectId: "slack-clone-26ed3",
  storageBucket: "slack-clone-26ed3.appspot.com",
  messagingSenderId: "875613937003",
  appId: "1:875613937003:web:362f56827f1ed8d94a002e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider  = new firebase.auth.GoogleAuthProvider();
 

export { auth, provider, db};