import React, {useState, useEffect} from 'react'
import firebase from 'firebase'
import { auth } from './firebase'

const LogOut = () =>{
  const initialDisplayName = ()=>{ return 'User'}
  const initialPhotourl = ()=>{ return ''}

  const [ displayName, setDisplayName ] = useState(()=> initialDisplayName())
  const [ photoURL, setPhotoURL ] = useState( ()=> initialPhotourl() )

  const user = firebase.auth().currentUser
  useEffect(()=>{
    setDisplayName(user.displayName)
    setPhotoURL(user.photoURL)
  }, [])
     //console.log('USERRRR--->', user)
  return (
    <div>
      <h1>{displayName}</h1>
      <img className='userPhoto' src={photoURL}></img>
      <button onClick={()=> auth.signOut()}>Log Out</button>
    </div>
  )
}

export default LogOut