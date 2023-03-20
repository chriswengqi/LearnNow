import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAA5aQ3IQf8eNnrPFSoerkZV0bBWoX1I5o",
    authDomain: "learnnow-6a25b.firebaseapp.com",
    projectId: "learnnow-6a25b",
    storageBucket: "learnnow-6a25b.appspot.com",
    messagingSenderId: "94622158887",
    appId: "1:94622158887:web:eb0aa69d53cb18c008fe02",
    measurementId: "G-2NL840WZW8"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };