import React from 'react'
import firebase from 'firebase'
import { auth } from './firebase'


const LogIn = () =>{
  const logInWithGoogle = ()=>{
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }
  return (
    <div>
      <h1>Sign in Below</h1>
      <button onClick={ logInWithGoogle }>Sign in With Google</button>
    </div>
  )
}

export default LogIn