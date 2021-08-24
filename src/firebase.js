import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAy8CA9P7RPC68u_WbsNmQDVwdnJ9Rt7MY",
  authDomain: "fs-solo-project.firebaseapp.com",
  projectId: "fs-solo-project",
  storageBucket: "fs-solo-project.appspot.com",
  messagingSenderId: "783776097013",
  appId: "1:783776097013:web:53db9fc1ab05d0bac6dbbc",
  measurementId: "G-XFT6BT8S96"
})

//firestore database
const db = firebaseApp.firestore()

//authentication
const auth = firebase.auth()

export { db, auth }