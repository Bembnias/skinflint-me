import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBjOKBNxfH34Jg85RV5kmczxZK2QJSLYFs",
    authDomain: "skinflint-me-project.firebaseapp.com",
    projectId: "skinflint-me-project",
    storageBucket: "skinflint-me-project.appspot.com",
    messagingSenderId: "736811051569",
    appId: "1:736811051569:web:adb4e16dd43c032e448310"
};

firebase.initializeApp(firebaseConfig)

export const projectAuth = firebase.auth()
export const projectFirestore = firebase.firestore()
export const timestamp = firebase.firestore.FieldValue.serverTimestamp

// Auth providers
export const googleProvider = new firebase.auth.GoogleAuthProvider()