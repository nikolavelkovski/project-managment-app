import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyCrSjvsO99iqItmyr6j-rlHBBtR9ROv5jM",
    authDomain: "dojo-project-a8687.firebaseapp.com",
    projectId: "dojo-project-a8687",
    storageBucket: "dojo-project-a8687.appspot.com",
    messagingSenderId: "1058182286647",
    appId: "1:1058182286647:web:4d21c4041214a3c8ea5eb2"
  };

  firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()


const timestamp = firebase.firestore.Timestamp


export {projectFirestore,projectAuth,timestamp,projectStorage}